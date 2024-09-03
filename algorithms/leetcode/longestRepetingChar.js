
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

const characterReplacement = (s, k) => {
  const hashMap = {};
  let longest = 0;
  let maxFreq = 0;
  let leftPointer = 0;

  for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
    // Increment the frequency count by 1 upon encountering a character
    hashMap[s[rightPointer]] = (hashMap[s[rightPointer]] || 0) + 1;

    // Maximum frequency of any character encountered so far in the current window.
    maxFreq = Math.max(maxFreq, hashMap[s[rightPointer]]);

    // Move the window from the left until reaching `k` replacements
    if (maxFreq + k < rightPointer - leftPointer + 1) {
      hashMap[s[leftPointer]]--;
      leftPointer++;
    }

    // Calculate the longest repeating character
    longest = Math.max(longest, rightPointer - leftPointer + 1);
  }

  return longest;
};
