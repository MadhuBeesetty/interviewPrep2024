// 22. Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed
// parentheses.

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

const generateParenthesis = (n) => {
    let output = [];
    const generate = (current, open, close,) => {
        if(current.length === 2*n){
          output.push(current);
          return;
        };

        if(open < n){
          generate(current + "(", open + 1, close)
        }
        if(close < open){
          generate(current + ")", open, close +1);
        }
    };
    generate("", 0,0);
    return output;
};


console.log(generateParenthesis(3));
console.log(generateParenthesis(6));
