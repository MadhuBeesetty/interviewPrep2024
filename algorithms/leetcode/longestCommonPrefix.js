// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = (strs) => {

  if (strs.length === 1) return strs[0];
  let commonString = "";
  let referenceString = strs[0];
  const twoStringComparision = (str) => {
      for (var i = 0; i < referenceString.length; i++) {
          if (referenceString[i] !== str[i]) {
              referenceString = referenceString.slice(0, i);
          }
          commonString = referenceString;
      }
  };

  strs.forEach(element => {
      twoStringComparision(element);
  });

  return commonString;
};

console.log(longestCommonPrefix(["flower","flower","flower","flower"]))
