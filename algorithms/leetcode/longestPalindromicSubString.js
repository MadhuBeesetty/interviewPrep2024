// 5. Longest Palindromic Substring

// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

const longestPalindrome = (s) => {
  let longest = "";

  const palindromeCheck = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > longest.length) {
        longest = s.slice(left, right + 1);
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    palindromeCheck(i, i);

    palindromeCheck(i, i + 1);
  }

  return longest;
};

console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
