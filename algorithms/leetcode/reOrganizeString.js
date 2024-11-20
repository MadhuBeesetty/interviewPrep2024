// Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

// Return any possible rearrangement of s or return "" if not possible.

// Example 1:

// Input: s = "aab"
// Output: "aba"
// Example 2:

// Input: s = "aaab"
// Output: ""

// Constraints:

// 1 <= s.length <= 500
// s consists of lowercase English letters.

const reorganizeString = (s) => {
  // Step 1: Frequency count
  const charCount = {};
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Step 2: Edge case check
  const maxFrequency = Math.max(...Object.values(charCount));
  if (maxFrequency > Math.ceil(s.length / 2)) {
    return ""; // Impossible to rearrange
  }

  // Step 3: Sort keys by frequency
  const sortedKeys = Object.keys(charCount).sort((a, b) => charCount[b] - charCount[a]);

  // Step 4: Create the output array
  const outputArray = new Array(s.length);
  let index = 0;

  for (const char of sortedKeys) {
    let count = charCount[char];

    // Place the current character in the output alternately
    while (count > 0) {
      if (index >= s.length) index = 1; // Wrap around to odd indices
      outputArray[index] = char;
      index += 2;
      count--;
    }
  }

  // Step 5: Return the solution
  return outputArray.join('');
};
