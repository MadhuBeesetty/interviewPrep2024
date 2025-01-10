// 844. Backspace String Compare

// Given two strings s and t, return true if they are equal when both are typed into
//  empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

const backspaceCompare = (s, t) => {
  const findOutPutString = (string) => {
      let arr = [];
      for(var i = 0; i < string.length; i++){
          if(string[i] === "#"){
              arr.pop();
          }else{
              arr.push(string[i]);
          }
      };
      return arr.join("");
  };
  if(findOutPutString(s) === findOutPutString(t)){
      return true;
  }else{
      return false;
  }
};

console.log(backspaceCompare("ab#c","ad#c"));
console.log(backspaceCompare("ab##","c#d#"));
