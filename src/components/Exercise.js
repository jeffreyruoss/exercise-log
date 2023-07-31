export class Exercise {
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