// 383. Ransom Note

// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by
// using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

const canConstruct = (ransomNote, magazine) => {
  const charCount = {};

  // Step 1: Build the reference object using `magazine`
  for (const char of magazine) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Step 2: Loop through `ransomNote` and check availability
  for (const char of ransomNote) {
    if (!charCount[char] || charCount[char] === 0) {
      return false; // If the character is missing or used up
    }
    charCount[char]--; // Use one occurrence of the character
  }

  return true; // All characters are available
};

// Example Usage
console.log(canConstruct("a", "b"));           // Output: false
console.log(canConstruct("aa", "ab"));         // Output: false
console.log(canConstruct("aa", "aab"));        // Output: true
