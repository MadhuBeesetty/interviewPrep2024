// 1209. Remove All Adjacent Duplicates in String II

// You are given a string s and an integer k, a k duplicate removal consists of
// choosing k adjacent and equal letters from s and removing them, causing the left
// and the right side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It is
// guaranteed that the answer is unique.


// Example 1:

// Input: s = "abcd", k = 2
// Output: "abcd"
// Explanation: There's nothing to delete.
// Example 2:

// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"
// Explanation:
// First delete "eee" and "ccc", get "ddbbbdaa"
// Then delete "bbb", get "dddaa"
// Finally delete "ddd", get "aa"
// Example 3:

// Input: s = "pbbcggttciiippooaais", k = 2
// Output: "ps"

const removeDuplicates = (s, k) => {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
      if (arr.length > 0 && arr[arr.length - 1][0] === s[i]) {
          arr[arr.length - 1][1]++;
          if (arr[arr.length - 1][1] === k) {
              arr.pop();
          }
      } else {
          arr.push([s[i], 1]);
      }
  }
  return arr.map(([char, count]) => char.repeat(count)).join("");
};
