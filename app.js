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
  const pausedList = document.getElementById('paused-exercise-list'); // New list for paused exercises
  list.innerHTML = '';
  pausedList.innerHTML = '';

  const sortedExercises = exercises.sort((a, b) => a.timestamp - b.timestamp);

  sortedExercises.forEach((exercise, index) => {
    const li = document.createElement('li');
    li.id = `li-${index}`;
    const timestampString = exercise.timestamp.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    li.innerHTML = `
      <input id="name-${index}" type="text" value="${exercise.name}" readonly /> 
      <input id="timestamp-${index}" type="text" value="${timestampString}" readonly />
      <button onclick="markAsDone('${exercise.name}')">DONE</button>
      <button onclick="togglePause('${exercise.name}')">${exercise.paused ? 'UNPAUSE' : 'PAUSE'}</button> 
      <button onclick="editExercise(${index})">EDIT</button> 
      <button onclick="saveExercise(${index})">SAVE</button>
    `;

    if (exercise.paused) {
      li.classList.add('paused');
      pausedList.appendChild(li);
    } else {
      list.appendChild(li);
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

render();
