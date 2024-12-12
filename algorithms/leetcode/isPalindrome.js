// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

const isPalindrome = (s) => {

  if (s.length <= 1) return true;

  const isLetter = (char) => {
      const charCode = char.charCodeAt(0);
      if (charCode >= 65 && charCode <= 90) {
          return char.toLowerCase();
      } else if ((charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57)) {
          return char;
      } else {
          return "invalid";
      }
  }

  for (var i = 0, j = s.length - 1; i <= j;) {
      if (isLetter(s[i]) === "invalid") {
          i++;
          continue;
      };
      if (isLetter(s[j]) === "invalid") {
          j--;
          continue;
      };
      if (isLetter(s[i]) !== isLetter(s[j])) return false;
      i++;
      j--;
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
