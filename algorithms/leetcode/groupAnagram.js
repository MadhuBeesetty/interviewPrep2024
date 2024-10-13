// Given an array of strings strs, group the
// anagrams
//  together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

const groupAnagrams = (strs) => {
  let output = [];
  const isAnagram = (str1, str2) => {
      if (str1.split('').sort().join('') === str2.split('').sort().join('')) {
          return true;
      } else {
          return false;
      }
  }

  let newSubArr = [];
  for (var i = 1; i <= strs.length; i++) {
      if (i === strs.length) {
          newSubArr.push(strs[0]);
          strs.splice(0, 1);
          output.push(newSubArr);
          newSubArr = [];
          i = 0;
      } else {
          if (isAnagram(strs[0], strs[i]) === true) {
              newSubArr.push(strs[i]);
              strs.splice(i, 1);
              i = i - 1;
          };
      }
  }

  return output;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
