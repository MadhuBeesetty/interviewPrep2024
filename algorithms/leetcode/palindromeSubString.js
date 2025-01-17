// 647. Palindromic Substrings

// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

const countSubstrings = (s) => {
  let count = 0;

  const palindromeCheck = (left, right) => {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
          count++;
          left--;
          right++;
      }
  };

  for (let i = 0; i < s.length; i++) {
      palindromeCheck(i, i);
      palindromeCheck(i, i + 1);
  }

  return count;
};

console.log(countSubstrings("abc"))
console.log(countSubstrings("rzabczr"))
