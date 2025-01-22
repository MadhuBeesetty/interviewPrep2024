// 916. Word Subsets

// You are given two string arrays words1 and words2.

// A string b is a subset of string a if every letter in b occurs in a including multiplicity.

// For example, "wrr" is a subset of "warrior" but is not a subset of "world".
// A string a from words1 is universal if for every string b in words2, b is a subset of a.

// Return an array of all the universal strings in words1. You may return the answer in any order.

// Example 1:

// Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]

// Output: ["facebook","google","leetcode"]

// Example 2:

// Input: words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["lc","eo"]

// Output: ["leetcode"]

// Example 3:

// Input: words1 = ["acaac","cccbb","aacbb","caacc","bcbbb"], words2 = ["c","cc","b"]

// Output: ["cccbb"]

const wordSubsets = (words1, words2) => {
  let output = [];
  for (var i = 0; i < words1.length; i++) {
      for (var j = 0; j < words2.length; j++) {
        // console.log(words1[i], "words 1");
          if (words1[i].indexOf(words2[j]) === -1) {
              i++;
              j = 0;
          }
      };
      output.push(words1[i]);
  }
  return output;
};

console.log(wordSubsets(["amazon","apple","facebook","google","leetcode"],["e","o"] ))
