class Exercise {
  constructor(name) {
    this.name = name;
    this.timestamp = this.generateRandomTimestamp();
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

const exercises = [
  'handstands',
  'hike',
  'trail run',
  'street run',
  'Hang',
  'Pullups underhand',
  'Pullups overhand',
  'Rows bands',
  'Rows gym straight',
  'Rows gym wide',
  'Squats',
  'Pushups straight',
  'Pushups center hand',
  'Pushups inclined',
  'bench press',
  'Planks full, half, side',
  'Dr K back (on side and on laying on back anchored)',
  'triceps kettle bed',
  'triceps dumbbells gym',
  'triceps skull crushers',
  'triceps pull down bands pole',
  'triceps pull down gym rope',
  'triceps pull down gym bar',
  'Crunches (3 variations)',
  'Biceps dumbbells',
  'Biceps kettle',
  'Forearms kettle',
  'Forearms dumbbells',
  'dumbbell laying on my side, to the side, shoulder exercise',
  'shoulder kettle',
  'shoulders dumbbells',
  'shoulder broom',
  'Chest press (laundry pole)',
  'Isometric Internal and External Rotation - elbow by side and push against hand',
  'back band',
  'ankle star',
  'calf raises - straight and at angles (inward and outward) - with weight',
  'leg extensions (on the chair, legs extending forward)',
  'Leg extensions upward with bands on high chair outside',
  'leg extensions side (Pull band apart with legs)',
  'forefoot balance on one leg',
  'Squats',
  'ankles side to side outward',
  'ankles side to side inward'
].map((name) => new Exercise(name));

function render() {
  const list = document.getElementById('exercise-list');
  list.innerHTML = '';
  exercises
    .sort((a, b) => a.timestamp - b.timestamp)
    .forEach((exercise) => {
      const li = document.createElement('li');
      const timestampString = exercise.timestamp.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
      li.innerHTML = `
        <span>${exercise.name} <span class="timestamp">(${timestampString})</span></span>
        <button onclick="markAsDone('${exercise.name}')">DONE</button>
      `;
      list.appendChild(li);
    });
}

window.markAsDone = (name) => {
  const exercise = exercises.find((ex) => ex.name === name);
  if (exercise) {
    exercise.updateTimestamp();
    render();
  }
};

render();
