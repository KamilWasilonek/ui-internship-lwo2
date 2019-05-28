export class SimTime {
  constructor() {
    this.time = 0;
    this.speed = 1;
    this.currentTime = 0;
  }
  get() {
    return this.time;
  }
  update(newTime) {
    if (newTime < this.currentTime) throw new Error('Backwards time');
    this.time = this.time + (newTime - this.currentTime) * this.speed;
    this.currentTime = newTime;
  }
  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }
}
