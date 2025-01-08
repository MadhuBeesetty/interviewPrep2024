// 187. Repeated DNA Sequences

// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.

// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings)
//  that occur more than once in a DNA molecule. You may return the answer in any order.

// Example 1:

// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]
// Example 2:

// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]

const findRepeatedDnaSequences = (s) => {
  const set = new Set();
  const repeatedSet = new Set();

  for(var i = 0; i < s.length - 10; i++ ){
    if(set.has(s.substring(i, i+10))){
      console.log(repeatedSet.has(s.substring(i, i+10)), "inside");
      repeatedSet.add(s.substring(i, i+10));
    }else{
      set.add(s.substring(i, i+10));
    }
  }
  return Array.from(repeatedSet);
};

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
