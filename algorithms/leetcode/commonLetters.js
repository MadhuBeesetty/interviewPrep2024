// Given a string array words, return an array of all characters that show up in all
// strings within the words (including duplicates). You may return the answer in any order.

// Example 1:

// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:

// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

const commonChars = (words) => {

  let commonFrequencyMap = new Map();
  for (let char of words[0]) {
      commonFrequencyMap.set(char, (commonFrequencyMap.get(char) || 0) + 1);
  }

  for (let i = 1; i < words.length; i++) {
      let currentWordMap = new Map();

      for (let char of words[i]) {
          currentWordMap.set(char, (currentWordMap.get(char) || 0) + 1);
      }

      for (let [char, freq] of commonFrequencyMap.entries()) {
          if (currentWordMap.has(char)) {
              commonFrequencyMap.set(char, Math.min(freq, currentWordMap.get(char)));
          } else {
              commonFrequencyMap.delete(char);
          }
      }
  }

  let result = [];
  for (let [char, freq] of commonFrequencyMap.entries()) {
      for (let i = 0; i < freq; i++) {
          result.push(char);
      }
  }
  return result;
}
console.log(commonChars(["acabcddd","bcbdbcbd","baddbadb"]));
