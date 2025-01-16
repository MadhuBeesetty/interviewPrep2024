// 159. Longest Substring with At Most Two Distinct Characters

// Given a string s, return the length of the longest
// substring
//  that contains at most two distinct characters.

// Example 1:

// Input: s = "eceba"
// Output: 3
// Explanation: The substring is "ece" which its length is 3.
// Example 2:

// Input: s = "ccaabbb"
// Output: 5
// Explanation: The substring is "aabbb" which its length is 5.

const lengthOfLongestSubstringTwoDistinct = (s) => {
  let reslen = 0;
  let map = new Map();
  let l = 0;

  for (let r = 0; r < s.length; r++) {
      map.set(s[r], (map.get(s[r]) || 0) + 1);
      while (map.size > 2) {
          let val = map.get(s[l]);
          if (val === 1) {
              map.delete(s[l]);
          } else {
              map.set(s[l], val - 1);
          }
          l++;
      }
      reslen = Math.max(reslen, r - l + 1);
  }

  return reslen;
};
