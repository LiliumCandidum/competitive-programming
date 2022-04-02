/**
 * String simmetry point
 * https://app.codility.com/programmers/trainings/4/str_symmetry_point/
 * 
 * score 100%
 */


function solution(S) {
  if (S.length === 1) {
    return 0;
  }
  if (S.length % 2 === 0) {
    return -1;
  }
  const centerX = Math.floor(S.length / 2);
  let indexDx = centerX + 1;
  let indexSx = centerX - 1;
  for (let i = 0; i < centerX; i++) {
    if (S.charAt(indexDx) !== S.charAt(indexSx)) {
      return -1;
    }
    indexDx++;
    indexSx--;
  }
  return centerX;
}