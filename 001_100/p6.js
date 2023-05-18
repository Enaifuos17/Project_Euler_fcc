/*

  * P6 - Sum square difference

  The sum of the squares of the first ten natural numbers is:
  1*2* + 2*2* + ... + 10*2* = 385

  The square of the sum of the first ten natural numbers is:
  (1 + 2 + ... + 10)2 = 552 = 3025

  Hence the difference between:
  the sum of the squares of the first ten natural numbers
  and the square of the sum is:
  3025 − 385 = 2640.

  Find the difference between
  the sum of the squares of the first n 
  natural numbers and the square of the sum.

*/

function sumSquareDifference(n) {
  let range = [];
  let squares = [];
  let sumOfSquares = 0;
  let sumOfFirstnNumbers = 0;
  let squareOfFirstnNumbers = 0;
  let diff = 0;

  // get the range
  for (let i = 1; i <= n; i++) {
    range.push(i);
  }
  // get the squares of the first n natural numbers
  for (let i = 0; i < range.length; i++) {
    squares.push(range[i] ** 2);
  }
  // sum of squares
  sumOfSquares = squares.reduce((prev, next) => {
    return prev + next;
  });

  // sum of the first n natural numbers
  sumOfFirstnNumbers = range.reduce((prev, next) => {
    return prev + next;
  });
  // square of the sum of the first n natural numbers
  squareOfFirstnNumbers = Math.pow(sumOfFirstnNumbers, 2);

  // diff between sum of squares and square of the sum
  diff = squareOfFirstnNumbers - sumOfSquares;

  //
  return diff;
}

console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(20)); // 41230
console.log(sumSquareDifference(100)); // 25164150
