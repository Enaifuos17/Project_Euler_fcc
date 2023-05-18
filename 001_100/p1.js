/* 

  * P1: Multiples of 3 and 5

  If we list all the natural numbers below 10 
  that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
  The sum of these multiples is 23.

  Find the sum of all the multiples of 3 or 5 below 
  the provided parameter value number.

*/

function multiplesOf3and5(number) {
  let multiples = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }
  let result = multiples.reduce((prev, next) => {
    return prev + next;
  });
  return result;
}

console.log(multiplesOf3and5(10)); // 23
console.log(multiplesOf3and5(49)); // 543
console.log(multiplesOf3and5(1000)); // 233168
console.log(multiplesOf3and5(8456)); // 16687353
console.log(multiplesOf3and5(19564)); // 89301183
