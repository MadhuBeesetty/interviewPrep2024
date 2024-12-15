// Given two strings needle and haystack, return the index of the first occurrence
// of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

const strStr = (haystack, needle) => {
  let firstIndex = -1;
  for (var i = 0; i < needle.length; i++) {
      for (var j = 0; j < haystack.length; j++) {
          if (needle[i] === haystack[j]) {
              if (haystack.slice(j, j + needle.length) === needle) {
                  firstIndex = j;
                  return firstIndex;
              };
          }
      }
  }
  return firstIndex;
};

console.log(strStr("hello", "ll"));
