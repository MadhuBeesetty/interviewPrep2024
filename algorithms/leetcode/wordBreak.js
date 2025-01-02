// 139. Word Break

// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into
//  a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:

// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: false

const wordBreak = (s, wordDict) => {
  let wordReference = new Set(wordDict);
  let dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  for(var i = 1; i <= s.length; i++){
    for(var j = 0; j < i; j++){
      console.log(i,j, s.substring(j,i));
      if(dp[j] && wordReference.has(s.substring(j,i))){
          dp[i] = true;
          break;
      };
    }
  }
  console.log(dp, "this is output");
  return dp[s.length];
};

console.log(wordBreak("leetcode", ["leet", "code"])); // Output: true
// console.log(wordBreak("applepenapple", ["apple", "pen"])); // Output: true
// console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // Output: false
