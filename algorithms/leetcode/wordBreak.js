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
  const wordSet = new Set(wordDict);
  console.log(wordSet, "this is word set");
  const dp = Array(s.length + 1).fill(false);
  console.log(dp, "this is dp");
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true;
        console.log(dp, "inside dp");
        break; // No need to check further
      }
    }
  }

  return dp[s.length];
};

console.log(wordBreak("leetcode", ["leet", "code"])); // Output: true
// console.log(wordBreak("applepenapple", ["apple", "pen"])); // Output: true
// console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // Output: false
