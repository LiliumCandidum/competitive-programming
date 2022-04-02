/**
 * Passing Cars
 * https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
 * 
 * score: 100%
 */

function solution(A) {
  let pairCars = 0;
  let zeros = 0;

  for (let car of A) {
    if (car === 0) {
      zeros++;
    } else if (car === 1) {
      pairCars = pairCars + zeros;
    }
    if (pairCars > 1000000000) {
      return -1
    }
  }
  return pairCars;
}
