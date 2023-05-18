/* 

  * P4 - Largest palindrome product

  A palindromic number reads the same both ways. 

  The largest palindrome made from the product 
  of two 2-digit numbers is 9009 = 91 × 99.

  Find the largest palindrome made from the product 
  of two n-digit numbers.

*/

function largestPalindromeProduct(n) {
  let nDigits = [];
  let palNumbers = [];
  let largestPal = 0;
  // get all possible numbers with n digits
  for (let i = 0; ; i++) {
    if (String(i).split("").length > n) {
      break;
    }
    nDigits.push(i);
  }
  // two loops, to get the all the products possible
  for (let i = nDigits.length - 1; i > 0; i--) {
    for (let j = nDigits.length - 1; j > 0; j--) {
      // temp hold the number in reverse
      let temp = String(nDigits[i] * nDigits[j])
        .split("")
        .reverse()
        .join("");
      // check if its palindrome
      if (nDigits[i] * nDigits[j] === parseInt(temp)) {
        palNumbers.push(nDigits[i] * nDigits[j]);
      }
    }
  }
  // get the largest palindrome
  for (let i = 0; i < palNumbers.length; i++) {
    if (palNumbers[i] > largestPal) {
      largestPal = palNumbers[i];
    }
  }
  return largestPal;
}

console.log(largestPalindromeProduct(2)); // 9009
// console.log(largestPalindromeProduct(3)); // 906609
// takes time
