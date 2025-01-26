// 3291. Minimum Number of Valid Strings to Form Target I

// You are given an array of strings words and a string target.

// A string x is called valid if x is a
// prefix
//  of any string in words.

// Return the minimum number of valid strings that can be concatenated to form target. If it is not
//  possible to form target, return -1.

// Example 1:

// Input: words = ["abc","aaaaa","bcdef"], target = "aabcdabc"

// Output: 3

// Explanation:

// The target string can be formed by concatenating:

// Prefix of length 2 of words[1], i.e. "aa".
// Prefix of length 3 of words[2], i.e. "bcd".
// Prefix of length 3 of words[0], i.e. "abc".
// Example 2:

// Input: words = ["abababab","ab"], target = "ababaababa"

// Output: 2

// Explanation:

// The target string can be formed by concatenating:

// Prefix of length 5 of words[0], i.e. "ababa".
// Prefix of length 5 of words[0], i.e. "ababa".
// Example 3:

// Input: words = ["abcdef"], target = "xyz"

// Output: -1

WRONG ANSWER;

const minValidStrings = (words, target) => {
  let dp = new Array(target.length).fill(false);
  dp[0] = true;
  for (var i = 1; i < target.length; i++) {
      for (var j = i + 1; j < target.length; j++) {
          if (words.indexOf(target.substring(i, j)) !== -1) {
              if (dp[i - 1] === true) {
                  dp[j] = true;
              }
          }
      };
      if (dp[dp.length - 1] === true) return true;
  };
  return false;
};

console.log(minValidStrings(["abc","aaaaa","bcdef"],"aabcdabc"));
