/**
 * Max Counters
 * https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
 * 
 * score: 100%
 */

function solution(N, A) {
  let max = 0; // max value in countersArray
  let maxed = 0; // max counter to fill the countersArray
  const countersArray = Array(N).fill(0);
  A.forEach(el => {
    const index = el - 1;
    if (index < N) {
      if (countersArray[index] > maxed) {
        countersArray[index]++;
      } else {
        countersArray[index] = maxed + 1;
      }
      if (countersArray[index] > max) {
        max = countersArray[index];
      }
    } else {
      maxed = max;
    }
  });
  countersArray.forEach((c, i) => {
    if (c < maxed) {
      countersArray[i] = maxed;
    }
  });

  return countersArray;
}

solution(5, [3, 4, 4, 6, 1, 4, 4])
