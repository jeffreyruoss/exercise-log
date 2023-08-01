import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { firebaseConfig } from './firebaseConfig.js';
import { Exercise } from '/src/components/Exercise.js';

import App from './src/App.svelte';

const app = new App({
  target: document.body,
});
export default app;

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

// Initialize Firestore through Firebase
const db = firebase.firestore();

let exercises = [];

const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = document.getElementById('register-email');
  const passwordInput = document.getElementById('register-password');
  const email = emailInput.value;
  const password = passwordInput.value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User is signed in
      var user = userCredential.user;
      alert("User registered successfully.");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
});

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = document.getElementById('login-email');
  const passwordInput = document.getElementById('login-password');
  const email = emailInput.value;
  const password = passwordInput.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User is signed in
      var user = userCredential.user;
      alert("User logged in successfully.");
      const auth = document.getElementById('auth');
      auth.style.display = 'none';
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
});


// log out
const logoutLink = document.getElementById('logout-link');
logoutLink.addEventListener('click', (e) => {
  e.preventDefault();
  firebase.auth().signOut()
    .then(() => {
      alert("User signed out successfully.");
      // #dashboard display none
      const dashboard = document.getElementById('dashboard');
      dashboard.style.display = 'none';
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
});

// check if user is logged in or not
firebase.auth().onAuthStateChanged((user) => {
  const loggedInStatus = document.getElementById('logged-in-status');
  if (user) {
    loggedInStatus.textContent = `${user.email} is signed in`;
    const dashboard = document.getElementById('dashboard');
    dashboard.style.display = 'block';
    loadExercises();
  } else {
    loggedInStatus.textContent = `No user is signed in`;
    const auth = document.getElementById('auth');
    auth.style.display = 'block';
  }
});

const loadExercises = () => {
  let user = firebase.auth().currentUser;
  if (user) {
    let uid = user.uid;
    db.collection("users").doc(uid).collection("exercises").doc("exerciseData").get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Exercises document data:", doc.data());
          let exercisesObject = doc.data();
          let exercisesArray = [];
          for (let key in exercisesObject) {
            exercisesArray.push(exercisesObject[key]);
          }
          exercises = exercisesArray.map(exercise =>
            new Exercise(exercise.name, new Date(exercise.timestamp), exercise.paused, exercise.up)
          );
          render();
          loadLastUpdated();
        } else {
          console.log("No exercises document!");
            if (!exercises.length) {
              exercises = ['exercise 1', 'exercise 2', 'exercise 3'].map(name => new Exercise(name));
            }
            render();
            loadLastUpdated();
        }
      })
      .catch((error) => {
        console.log("Error getting exercises document:", error);
      });
  } else {
    console.log("No user is signed in.");
  }
};

const render = () => {
  const list = document.getElementById('exercise-list');
  const pausedList = document.getElementById('paused-exercise-list'); 
  const todayList = document.getElementById('today-exercise-plan-list');

  list.innerHTML = '';
  pausedList.innerHTML = '';
  todayList.innerHTML = '';

  const sortedExercises = exercises.sort((a, b) => a.timestamp - b.timestamp);

  sortedExercises.forEach((exercise, index) => {
    const template = document.getElementById('exercise-template');
    const clone = template.content.cloneNode(true);
    const li = clone.querySelector('li');
    li.id = `li-${index}`;

    const nameInput = clone.querySelector('.name');
    nameInput.id = `name-${index}`;
    nameInput.value = exercise.name;
    nameInput.addEventListener('click', () => editExercise(index));

    const timestampString = exercise.timestamp.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    const timestampInput = clone.querySelector('.timestamp');
    timestampInput.id = `timestamp-${index}`;
    timestampInput.value = timestampString;
    timestampInput.addEventListener('click', () => editExercise(index));

    clone.querySelector('.up').onclick = () => moveUp(exercise.name);
    clone.querySelector('.done').onclick = () => markAsDone(exercise.name);
    const pauseButton = clone.querySelector('.pause');
    pauseButton.onclick = () => togglePause(exercise.name);
    // pauseButton.textContent = exercise.paused ? 'UNPAUSE' : 'PAUSE';
    clone.querySelector('.delete').onclick = () => deleteExercise(index);

    if (exercise.paused) {
      li.classList.add('paused');
      pausedList.appendChild(clone);
    } else if (exercise.up) {
      todayList.appendChild(clone);
    } else {
      list.appendChild(clone);
    }
  });
  // display none to all .loading elements
  const loadingElements = document.querySelectorAll('.loading');
  loadingElements.forEach((element) => {
    element.style.display = 'none';
  });
}

window.moveUp = name => {
  const exercise = exercises.find((ex) => ex.name === name);
  if (exercise) {
    exercise.up = !exercise.up;
    localStorage.setItem('exercises', JSON.stringify(exercises));
    render();
  }
  updateLastUpdated();
  saveExercisesToFirestore();
};  

window.markAsDone = name => {
  const exercise = exercises.find((ex) => ex.name === name);
  if (exercise) {
    exercise.updateTimestamp();
    exercise.up = false;  // Move the exercise back to the default list
    localStorage.setItem('exercises', JSON.stringify(exercises));
    render();
  }
  updateLastUpdated();
  saveExercisesToFirestore();
};

window.togglePause = name => {
  const exercise = exercises.find((ex) => ex.name === name);
  if (exercise) {
    exercise.paused = !exercise.paused;
    localStorage.setItem('exercises', JSON.stringify(exercises));
    render();
  }
  updateLastUpdated();
  saveExercisesToFirestore();
};

const editExercise = index => {
  document.getElementById(`name-${index}`).readOnly = false;
  document.getElementById(`timestamp-${index}`).readOnly = false;
  document.getElementById(`li-${index}`).classList.add('edit-mode');
  
  document.getElementById(`name-${index}`).addEventListener('keypress', event => {
    if (event.key === 'Enter') {
      saveExercise(index);
    }
  });
  
  document.getElementById(`timestamp-${index}`).addEventListener('keypress', event => {
    if (event.key === 'Enter') {
      saveExercise(index);
    }
  });
};

window.saveExercise = index => {
  let name = document.getElementById(`name-${index}`).value;
  let timestamp = new Date(document.getElementById(`timestamp-${index}`).value);
  
  exercises[index].name = name;
  exercises[index].timestamp = timestamp;
  localStorage.setItem('exercises', JSON.stringify(exercises));

  updateLastUpdated();
  render();

  saveExercisesToFirestore();
};

window.deleteExercise = index => {
  if (confirm('Are you sure you want to delete this exercise?')) {
    exercises.splice(index, 1);
    localStorage.setItem('exercises', JSON.stringify(exercises));
    render();
    updateLastUpdated();
    saveExercisesToFirestore();
  }
};

const form = document.getElementById('new-exercise-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('new-exercise-name');
  const name = nameInput.value.trim();
  if (name) {
    exercises.push(new Exercise(name)); 
    localStorage.setItem('exercises', JSON.stringify(exercises));
    nameInput.value = ''; 
    render();
    updateLastUpdated();
    saveExercisesToFirestore();
  }
});

const formatTimestamp = timestamp => {
  const options = { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric' 
  };
  return new Intl.DateTimeFormat('en-US', options).format(timestamp);
}

const notificationBar = document.getElementById('notification-bar');
const showNotification = (message, type = 'success') => {
  notificationBar.textContent = message;
  notificationBar.classList.add(type, 'show');
  setTimeout(() => {
    notificationBar.textContent = '';
    notificationBar.classList.remove(type, 'show');
  }, 3000);
}

const saveExercisesToFirestore = () => {
  console.log("Saving exercises to Firestore");
  let user = firebase.auth().currentUser;
  if (user) {
    let uid = user.uid;
  
    let exercisesObject = {};
    let exercisesArray = JSON.parse(localStorage.getItem('exercises') || "[]");
    exercisesArray.forEach((exercise, index) => {
      exercisesObject[index] = exercise;
    });
  
    db.collection("users").doc(uid).collection("exercises").doc("exerciseData").set(exercisesObject)
      .then(() => {
        console.log("Exercises document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing exercises document: ", error);
      });
  } else {
    console.log("No user is signed in.");
  }
};

const importExercisesFromClipboard = () => {
  navigator.clipboard.readText()
    .then(text => {
      try {
        const exercisesArray = JSON.parse(text);
        exercises = exercisesArray.map(exercise => new Exercise(exercise.name, new Date(exercise.timestamp), exercise.paused, exercise.up));
        localStorage.setItem('exercises', JSON.stringify(exercises));
        render();
        updateLastUpdated();
        saveExercisesToFirestore();
        showNotification('Exercises imported successfully', 'success');
      } catch (error) {
        showNotification('Invalid data in clipboard', 'error');
      }
    })
    .catch(error => {
      showNotification('Error reading from clipboard', 'error');
    });
}
const importButton = document.getElementById('import-button');
importButton.addEventListener('click', importExercisesFromClipboard);