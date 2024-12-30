// 243. Shortest Word Distance

// Given an array of strings wordsDict and two different strings that already exist in
// the array word1 and word2, return the shortest distance between these two words in the list.

// Example 1:

// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
// Output: 3
// Example 2:

// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
// Output: 1

const shortestDistance = (wordsDict, word1, word2) => {
  let index1 = -1; // Track position of word1
  let index2 = -1; // Track position of word2
  let minDistance = Infinity; // Initialize minimum distance

  for (let i = 0; i < wordsDict.length; i++) {
    // If the current word matches word1
    if (wordsDict[i] === word1) {
      index1 = i; // Update the position of word1
      // If word2 has already been found, calculate the distance
      if (index2 !== -1) {
        minDistance = Math.min(minDistance, Math.abs(index1 - index2));
      }
    }

    // If the current word matches word2
    if (wordsDict[i] === word2) {
      index2 = i; // Update the position of word2
      // If word1 has already been found, calculate the distance
      if (index1 !== -1) {
        minDistance = Math.min(minDistance, Math.abs(index1 - index2));
      }
    }
  }

  return minDistance;
};

// Example Usage
const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
console.log(shortestDistance(wordsDict, "coding", "practice")); // Output: 3
console.log(shortestDistance(wordsDict, "makes", "coding"));    // Output: 1
