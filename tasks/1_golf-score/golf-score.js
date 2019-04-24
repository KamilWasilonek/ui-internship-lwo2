export const GOLF_SCORES = {
  HOLE_IN_ONE: `Hole_in_one`,
  EAGLE: `Eagle`,
  BIRDIE: `Birdie`,
  PAR: `Par`,
  BOGEY: `Bogey`,
  DOUBLE_BOGEY: `Double Bogey`,
  GO_HOME: `Go Home`,
};

export function golfScore(par, strokes) {
  if (strokes === 1) {
    return GOLF_SCORES.HOLE_IN_ONE;
  }
  switch (strokes - par) {
    case -2:
    case -3:
      return GOLF_SCORES.EAGLE;
    case -1:
      return GOLF_SCORES.BIRDIE;
    case 0:
      return GOLF_SCORES.PAR;
    case 1:
      return GOLF_SCORES.BOGEY;
    case 2:
      return GOLF_SCORES.DOUBLE_BOGEY;
    default:
      return GOLF_SCORES.GO_HOME;
  }
}
