// 1047. Remove All Adjacent Duplicates In String

// You are given a string s consisting of lowercase English letters.
//  A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made.
// It can be proven that the answer is unique.

// Example 1:

// Input: s = "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
// Example 2:

// Input: s = "azxxzy"
// Output: "ay"

// const removeDuplicates = (s) => {
//    let i = 1;
//    let j = 0;
//    while(i <= s.length){
//     if(s[i] === s[j]){
//       s = s.slice(0,j) + s.slice(i+1);
//       if(j > 0){
//         i--;
//         j--;
//       }
//     }else{
//       i++;
//       j++;
//     }
//    }
//    return s;
// };

const removeDuplicates = (s) => {
  let array = [];
  array.push(s[0]);
  for(var i = 1; i < s.length; i++){
    if(array[(array.length - 1)] === s[i]){
      array.pop();
    }else{
      array.push(s[i]);
    }
  }
  return array.join('');
}

console.log(removeDuplicates("abbaca"));
