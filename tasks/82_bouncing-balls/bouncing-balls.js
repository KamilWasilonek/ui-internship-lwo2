export function bouncingBall(height, bounce, window) {
  return Math.floor(Math.log(window / height) / Math.log(bounce)) * 2 + 1;
}

