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

// note: 

const lengthOfLongestSubstring = (s) => {
  let substring;
  let obj = {};
  let maxsubString = 1;
  let subStringLength = 0;
  for(var i = 0; i < s.length; i++){
      if(!obj[s[i]]){
          obj[s[i]] = s[i];
          substring = substring + s[i];
          subStringLength = subStringLength + 1;
          console.log(s[i], subStringLength, substring, maxsubString);
          if(maxsubString < subStringLength){
            maxsubString = subStringLength;
        };
      }else{
          if(maxsubString < subStringLength){
              maxsubString = subStringLength;
          };
          obj = {};
          substring = '';
          subStringLength = 0;
      }
  }
  return maxsubString;
};

console.log(lengthOfLongestSubstring("pwwkew"))
