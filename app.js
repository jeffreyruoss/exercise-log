firebase.initializeApp(firebaseConfig);



const localTopBar = () => {
  const topBar = document.getElementById('top-bar');
  if (window.location.hostname === 'localhost') {
    topBar.style.display = 'block';
  }
}
localTopBar();


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

// check if user is logged in or not
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.email);

  } else {
    console.log("user is not signed in");
  }
});


class Exercise {
  constructor(name, timestamp = null, paused = false, up = false) {
    this.name = name;
    this.timestamp = timestamp || this.generateRandomTimestamp();
    this.paused = paused;
    this.up = up;
  }

  generateRandomTimestamp() {
    const now = new Date().getTime();
    const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000;
    return new Date(oneWeekAgo + Math.random() * (now - oneWeekAgo));
  }

  updateTimestamp() {
    this.timestamp = new Date();
  }
}

let exercises = JSON.parse(localStorage.getItem('exercises') || "[]").map(exercise => 
  new Exercise(exercise.name, new Date(exercise.timestamp), exercise.paused, exercise.up)
);

if (!exercises.length) {
  exercises = ['exercise 1', 'exercise 2', 'exercise 3'].map(name => new Exercise(name));
}

const loadLastUpdated = () => {
  const lastUpdated = document.querySelector('#last-updated');
  const timestamp = localStorage.getItem('last-updated');
  if (timestamp) {
    lastUpdated.textContent = timestamp;
  }
}

const updateLastUpdated = () => {
  const now = new Date();
  const timestamp = formatTimestamp(now);
  document.querySelector('#last-updated').textContent = timestamp;
  localStorage.setItem('last-updated', timestamp);
}

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
    pauseButton.textContent = exercise.paused ? 'UNPAUSE' : 'PAUSE';
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
}

window.moveUp = name => {
  const exercise = exercises.find((ex) => ex.name === name);
  if (exercise) {
    exercise.up = !exercise.up;
    localStorage.setItem('exercises', JSON.stringify(exercises));
    render();
  }
  updateLastUpdated();
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
};

window.togglePause = name => {
  const exercise = exercises.find((ex) => ex.name === name);
  if (exercise) {
    exercise.paused = !exercise.paused;
    localStorage.setItem('exercises', JSON.stringify(exercises));
    render();
  }
  updateLastUpdated();
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
};

window.deleteExercise = index => {
  if (confirm('Are you sure you want to delete this exercise?')) {
    exercises.splice(index, 1);
    localStorage.setItem('exercises', JSON.stringify(exercises));
    render();
    updateLastUpdated();
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

const saveExerciseToClipboard = () => {
  const exercisesString = JSON.stringify(exercises);
  navigator.clipboard.writeText(exercisesString);
  showNotification('Copied to clipboard', 'success');
};
const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', saveExerciseToClipboard);


render();
loadLastUpdated();
