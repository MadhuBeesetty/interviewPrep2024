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
  const group = new Map();

  for (var i = 0; i < strs.length; i++) {
      let isAnagram = strs[i].split("").sort().join();
      if (!group.get(isAnagram)) {
          let ana = [];
          ana.push(strs[i]);
          group.set(isAnagram, ana);
      } else {
        let ana = group.get(isAnagram);
        ana.push(strs[i]);
          group.set(isAnagram, ana);
      }
  }
  return Array.from(group.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
