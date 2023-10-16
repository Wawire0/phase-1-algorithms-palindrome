function isPalindrome(str) {
  // Remove any non-letter characters and convert the string to lowercase
  str = str.replace(/[^a-z]/g, '').toLowerCase();

  // Reverse the string and compare it to the original string
  return str === str.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("robot")); // Output: false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true

