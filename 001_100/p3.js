/* 

  * P3 - Largest prime factor

  The prime factors of 13195 are 5, 7, 13 and 29.
  What is the largest prime factor of the given number?

  Prime factors of a number are the set of prime numbers 
  which when multiplied by together give the actual number. 
  Also, we can say, 
  the prime factors divide the number completely
  
  A prime number is a whole number greater than 1 
  with exactly two divisors: 
  1 and itself. 

  For example, 
  2 is a prime number because it is only divisible by 1 and 2 
  In contrast, 4 is not prime 
  since it is divisible by 1, 2 and 4.

*/

function largestPrimeFactor(number) {
  let primeNumbers = [];

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

  // loop and check:
  // first -> if the i a prime number using isPrime()
  // second -> if our number % i = 0 (PF divide the number completely)
  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) {
      if (number % i === 0) {
        primeNumbers.push(i);
      }
    }
  }

  // get the max number "I kw I kw Math.max()"
  let maxVal = primeNumbers[0];
  for (let i = 1; i < primeNumbers.length; i++) {
    if (primeNumbers[i] > maxVal) {
      maxVal = primeNumbers[i];
    }
  }

  return maxVal;
}

console.log(largestPrimeFactor(2)); // 2
console.log(largestPrimeFactor(3)); // 3
console.log(largestPrimeFactor(5)); // 5
console.log(largestPrimeFactor(7)); // 7
console.log(largestPrimeFactor(8)); // 2
console.log(largestPrimeFactor(13195)); // 29
// console.log(largestPrimeFactor(600851475143)); // 6857
// its take a lot of time BUT its working
