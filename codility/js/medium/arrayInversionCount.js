/**
 * Array inversion count
 * https://app.codility.com/programmers/trainings/4/array_inversion_count/
 * 
 * score: 72% (improve performance? I don't remember)
 */

function solution(A) {
  let inversions = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] > A[j]) {
        inversions++;
        if (inversions > 1000000000) {
          return -1;
        }
      }
    }
  }
  return inversions;
}