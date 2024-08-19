// Input: n = 11

// Output: 3

// Explanation:

// The input binary string 1011 has a total of three set bits.

const numberOfOneBits = (num) => {
  let binaryString = num.toString(2);
  let numofones = 0;
  binaryString.map((eachnum, index) => {
    eachnum === "1" ? numofones++ : numofones;
  })
  return numofones
}

numberOfOneBits(11);