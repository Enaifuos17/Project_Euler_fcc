/* 

  * P10 - Summation of primes

  The sum of the primes below 10 is:
  2 + 3 + 5 + 7 = 17

  Find the sum of all the primes below n

*/

function primeSummation(n) {
  let sum = 0;
  // function check is its a prime number or not
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }
  // check all the numbers below n using isPrime() func
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  // return sum
  return sum;
}

console.log(primeSummation(17)); // 41
console.log(primeSummation(2001)); // 277050
console.log(primeSummation(140759)); // 873608362
console.log(primeSummation(2000000)); // 142913828922

// ! NOTES:

/*

i was using my isPrime() function to check if its prime or not
but the test failed bcs it took time to execute
so i used this isPrime() function
its more proffesional 

The reason for using Math.sqrt(num) 
as the upper limit for the loop is an optimization technique. 
To check if a number is prime, 
it is sufficient to test divisibility up to the square root of that number. 
If a number is not divisible by any number up to its square root, 
it will not be divisible by any larger number. 
Hence, there is no need to continue the loop beyond the square root of the number.

*/
