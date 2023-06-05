class Exercise {
  constructor(name, timestamp = null, paused = false) {
    this.name = name;
    this.timestamp = timestamp || this.generateRandomTimestamp();
    this.paused = paused;
  }
}

Exercise.prototype.generateRandomTimestamp = function() {
  const now = new Date().getTime();
  const oneWeekAgo = now - 7 * 24 * 60 * 60 * 1000;
  return new Date(oneWeekAgo + Math.random() * (now - oneWeekAgo));
};

Exercise.prototype.updateTimestamp = function() {
  this.timestamp = new Date();
};

let exercises = localStorage.getItem('exercises');

if (exercises) {
  exercises = JSON.parse(exercises).map((exercise) => {
    let ex = new Exercise(exercise.name, new Date(exercise.timestamp), exercise.paused);
    Object.setPrototypeOf(ex, Exercise.prototype);
    return ex;
  });
} else {
  exercises = [
    'exercise 1',
    'exercise 2',
    'exercise 3'
  ].map((name) => new Exercise(name));
}

function render() {
  const list = document.getElementById('exercise-list');
  const pausedList = document.getElementById('paused-exercise-list'); 
  list.innerHTML = '';
  pausedList.innerHTML = '';

  const sortedExercises = exercises.sort((a, b) => a.timestamp - b.timestamp);

  sortedExercises.forEach((exercise, index) => {
    const template = document.getElementById('exercise-template');
    const clone = template.content.cloneNode(true);
    const li = clone.querySelector('li');
    li.id = `li-${index}`;

    const nameInput = clone.querySelector('.name');
    nameInput.id = `name-${index}`;
    nameInput.value = exercise.name;

    const timestampString = exercise.timestamp.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    const timestampInput = clone.querySelector('.timestamp');
    timestampInput.id = `timestamp-${index}`;
    timestampInput.value = timestampString;

    clone.querySelector('.done').onclick = () => markAsDone(exercise.name);
    const pauseButton = clone.querySelector('.pause');
    pauseButton.onclick = () => togglePause(exercise.name);
    pauseButton.textContent = exercise.paused ? 'UNPAUSE' : 'PAUSE';
    clone.querySelector('.edit').onclick = () => editExercise(index);
    clone.querySelector('.save').onclick = () => saveExercise(index);
    clone.querySelector('.delete').onclick = () => deleteExercise(index);

    if (exercise.paused) {
      li.classList.add('paused');
      pausedList.appendChild(clone);
    } else {
      list.appendChild(clone);
    }
  });
}

window.markAsDone = (name) => {
  const exercise = exercises.find((ex) => ex.name === name);
  if (exercise) {
    exercise.updateTimestamp();
    localStorage.setItem('exercises', JSON.stringify(exercises));
    render();
  }
};

window.togglePause = (name) => {
  const exercise = exercises.find((ex) => ex.name === name);
  if (exercise) {
    exercise.paused = !exercise.paused;
    localStorage.setItem('exercises', JSON.stringify(exercises));
    render();
  }
};

window.editExercise = (index) => {
  document.getElementById(`name-${index}`).readOnly = false;
  document.getElementById(`timestamp-${index}`).readOnly = false;
  document.getElementById(`li-${index}`).classList.add('edit-mode');
};

window.saveExercise = (index) => {
  let name = document.getElementById(`name-${index}`).value;
  let timestamp = new Date(document.getElementById(`timestamp-${index}`).value);
  
  exercises[index].name = name;
  exercises[index].timestamp = timestamp;
  localStorage.setItem('exercises', JSON.stringify(exercises));
  
  document.getElementById(`name-${index}`).readOnly = true;
  document.getElementById(`timestamp-${index}`).readOnly = true;
  document.getElementById(`li-${index}`).classList.remove('edit-mode');
};

window.deleteExercise = (index) => {
  exercises.splice(index, 1); // Remove the exercise from the array
  localStorage.setItem('exercises', JSON.stringify(exercises)); // Save the updated array to localStorage
  render(); // Re-render the updated list
};


render();

/**
 * Add new exercise
 */
const form = document.getElementById('new-exercise-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('new-exercise-name');
  const name = nameInput.value.trim();
  if (name) {
    const exercise = new Exercise(name);
    exercises.push(exercise); 
    localStorage.setItem('exercises', JSON.stringify(exercises));
    nameInput.value = ''; 
    render();
  }
});

