/*

  * P7 - 10001st prime

    By listing the first six prime numbers: 
    2, 3, 5, 7, 11, and 13, 
    we can see that the 6th prime is 13.

    What is the nth prime number?

*/

function nthPrime(n) {
  let primesArr = [];
  let maxNumber = Number.MAX_SAFE_INTEGER;

  // func to check if its a prime number or not
  function isPrime(x) {
    if (x <= 1) {
      return false;
    }
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }

  // loop and check every number using the isPrime() func
  // when we get the first n prime numbers => BREAK the loop
  for (let i = 2; i < maxNumber; i++) {
    if (isPrime(i)) {
      primesArr.push(i);
    }
    if (primesArr.length === n) {
      break;
    }
  }

  //
  return primesArr[n - 1];
}

console.log(nthPrime(6)); // 13
console.log(nthPrime(10)); // 29
console.log(nthPrime(100)); // 541
console.log(nthPrime(1000)); // 7919
// console.log(nthPrime(10001)); // 104743
// takes time

// -----------------------------
console.log("*".repeat(20));
// -----------------------------

// * solution 2

function nthPrime_1(n) {
  // primes array which will store all the prime numbers
  let primes = [2];

  // num is the number well use while the checking
  let num = 3;
  let isPrime = true;

  // looping until primes array is equal to n
  while (primes.length < n) {
    for (let i = 0; primes[i] <= num; i++) {
      if (num % primes[i] == 0) {
        // looping till we find the prime
        isPrime = false;
        break;
      }
    }

    // if prime found, push it to the array
    if (isPrime) {
      primes.push(num);
    }
    isPrime = true;

    // an optimization technique:
    // since we know of all even numbers only 2 is a prime number,
    // we can skip the rest
    num += 2;
  }

  //
  return primes[n - 1];
}

console.log(nthPrime(6)); // 13
console.log(nthPrime(10)); // 29
console.log(nthPrime(100)); // 541
console.log(nthPrime(1000)); // 7919
// console.log(nthPrime_1(10001)); // 104743
// takes less time
