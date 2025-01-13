// 17. Letter Combinations of a Phone Number

// Given a string containing digits from 2-9 inclusive, return all possible letter
// combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below.
// Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]

const letterCombinations = (digits) => {
  if (!digits.length) return [];

  const digitToChars = {
      2: "abc",
      3: "def",
      4: "ghi",
      5: "jkl",
      6: "mno",
      7: "pqrs",
      8: "tuv",
      9: "wxyz"
  };

  const result = [];

  const backtrack = (combination, index) => {
      if (combination.length === digits.length) {
          result.push(combination);
          return;
      }

      const currentDigit = digits[index];
      for (const char of digitToChars[currentDigit]) {
          backtrack(combination + char, index + 1);
      }
  };

  backtrack("", 0);
  return result;
};

console.log(letterCombinations("23"));
console.log(letterCombinations("2"));
console.log(letterCombinations("45634"));
