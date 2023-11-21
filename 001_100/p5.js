/* 

  * P5 - Smallest multiple

  2520 is the smallest number that can be divided by each of 
  the numbers from 1 to 10 without any remainder.

  What is the smallest positive number that is 
  evenly divisible by all of the numbers from 1 to n?

*/

// * SOLUTION 1
// ------------
function smallestMult_0(n) {
  let range = [];
  let test = false;
  let multiple = [];
  // get the range
  for (let i = 1; i <= n; i++) {
    range.push(i);
  }
  let smallestMult = 1;
  // while true => (!test)
  while (!test) {
    for (let i = 0; i < range.length; i++) {
      if (smallestMult % range[i] === 0) {
        multiple.push("y");
      }
    }
    //
    if (multiple.length === range.length) {
      test = true; // here the while will stop
    } else {
      multiple = multiple.splice(multiple.length); // empty the arr
      smallestMult++; // increment
    }
  }
  //
  return smallestMult;
}

console.log(smallestMult_0(5)); // 60
console.log(smallestMult_0(7)); // 420
console.log(smallestMult_0(10)); // 2520
console.log(smallestMult_0(13)); // 360360
// console.log(smallestMult_0(20)); //
// ! infinite loop

// -----------------------------------
console.log("*".repeat(20));

// * SOLUTION 2
// ------------
function smallestMult(n) {
  let range = [];
  let smallestMult = 1;
  // get the range
  for (let i = 1; i <= n; i++) {
    range.push(i);
  }
  // isDivisible() => func that check if the number is divisible by 1 to n
  function isDivisible(num) {
    for (let i = 0; i < range.length; i++) {
      if (num % range[i] !== 0) {
        return false;
      }
    }
    return true;
  }
  // starting with number 1, check
  while (true) {
    if (isDivisible(smallestMult)) {
      break; // break the loop
    }
    smallestMult += 1; // increment the number
  }
  //
  return smallestMult;
}

console.log(smallestMult(5)); // 60
console.log(smallestMult(7)); // 420
console.log(smallestMult(10)); // 2520
console.log(smallestMult(13)); // 360360
// console.log(smallestMult(20)); // 232792560
// ! it takes time but it works

// -----------------------------------
console.log("*".repeat(20));

// * SOLUTION 3
// ------------

//LCM of two numbers
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

//Euclidean recursive algorithm
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function smallestMult_last(n) {
  let maxLCM = 1;

  //Getting the LCM in the range
  for (let i = 2; i <= n; i++) {
    maxLCM = lcm(maxLCM, i);
  }
  return maxLCM;
}

console.log(smallestMult_last(5)); // 60
console.log(smallestMult_last(7)); // 420
console.log(smallestMult_last(10)); // 2520
console.log(smallestMult_last(13)); // 360360
console.log(smallestMult_last(20)); // 360360
// ! not mine
