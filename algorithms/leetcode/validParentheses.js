// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  let valid = new Map();
  valid.set("[", "]");
  valid.set("{", "}");
  valid.set("(", ")");
  let stack = [];
  for (var i = 0; i < s.length; i++) {
      if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
          stack.push(s[i]);
      } else if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
          if (valid.get(stack.pop()) !== s[i]) return false;
      };
  };
  return stack.length === 0 ? true : false
};
