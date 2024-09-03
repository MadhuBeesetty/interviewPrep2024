// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

const lengthOfLongestSubstring = (s) => {
  let set = new Set();
  let left = 0;
  let max = 0;

   if(s.length < 1) return s.length; 

  for(var i = 0; i < s.length; i++){
    while (set.has(s[i])) {
      console.log(i, left, "while loop");
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
    console.log(set, left, "max");
    max = Math.max(max, i - left + 1);
  }
  return max;
};

// console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
