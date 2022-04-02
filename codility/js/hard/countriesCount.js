/**
 * Countries count
 * https://app.codility.com/programmers/trainings/7/countries_count/
 * 
 * score: 86% (improve performance)
 */

let globalA;
let visited;

function exploreCountry(i, j, country) {
  if (i + 1 < globalA.length && !visited[i + 1][j] && globalA[i + 1][j] === country) {
    visited[i + 1][j] = true;
    exploreCountry(i + 1, j, country);
  }
  if (i - 1 >= 0 && !visited[i - 1][j] && globalA[i - 1][j] === country) {
    visited[i - 1][j] = true;
    exploreCountry(i - 1, j, country);
  }
  if (j - 1 >= 0 && !visited[i][j - 1] && globalA[i][j - 1] === country) {
    visited[i][j - 1] = true;
    exploreCountry(i, j - 1, country);
  }
  if (j + 1 < globalA[i].length && !visited[i][j + 1] && globalA[i][j + 1] === country) {
    visited[i][j + 1] = true;
    exploreCountry(i, j + 1, country);
  }
}

function solution(A) {
  let countries = 0;
  globalA = A;
  visited = Array(A.length).fill(false).map(() => Array(A[0].length).fill(false));

  for (let i = 0; i < A.length; i++) { //row
    for (let j = 0; j < A[i].length; j++) { // column
      if (!visited[i][j]) {
        visited[i][j] = true;
        exploreCountry(i, j, A[i][j]);
        countries++;
      }
    }
  }
  return countries;
}
