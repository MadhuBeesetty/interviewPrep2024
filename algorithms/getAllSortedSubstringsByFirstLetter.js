function getAllSortedSubstringsByFirstLetter(s) {
  const substrings = [];

  // Generate all possible substrings
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      substrings.push(s.slice(i, j));
    }
  }

  // Sort substrings based on their first letter
  substrings.sort((a, b) => a[0].localeCompare(b[0]));

  return substrings;
}

// Example usage:
const inputString = "abc";
const result = getAllSortedSubstringsByFirstLetter(inputString);
console.log(result);
// Example Output: [ 'a', 'ab', 'abc', 'b', 'bc', 'c' ]
