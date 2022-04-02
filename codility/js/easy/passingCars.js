// result: 100%

function solution(A) {
  let pairCars = 0;
  let zeros = 0;

  for(let car of A) {
      if(car === 0) {
          zeros++;
      } else if(car === 1) {
          pairCars = pairCars + zeros;
      }
      if(pairCars > 1000000000) {
          return -1
      }
  }
  return pairCars;
}
