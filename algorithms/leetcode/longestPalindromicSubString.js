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
  let maxLength = 0;
  let start;

  const palindromeCheck = (left,right) => {
    while(left > 0 && right < s.length && s[left] === s[right]){
      left--;
      right++;
    };
    return right - left -1;
  }

  for(var i = 0; i<s.length; i++){
    let pal1 = palindromeCheck(i,i);
    let pal2 = palindromeCheck(i,i+1);
    console.log(pal1,pal2);
    longest = Math.max(pal1,pal2);

    if (longest > maxLength) {
      maxLength = longest;
      start = i - Math.floor((longest - 1) / 2);
    }
  }

  return s.substring(start, start + maxLength);
};

console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
