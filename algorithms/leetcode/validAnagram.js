// Given two strings s and t, return true if t is an
// anagram
//  of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  let referenceArray = [...t];
  for (var i = 0; i < t.length; i++) {
    console.log(s[i], referenceArray);
      if (referenceArray.indexOf(s[i]) !== -1) {
        console.log(s[i], referenceArray);
          referenceArray.splice(referenceArray.indexOf(s[i]), 1);
      } else {
        console.log("i am here");
          return false;
      }
      // console.log(referenceArray);
  }
  return true;
}

console.log(isAnagram("aacc", "ccac"));
