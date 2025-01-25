// Given an input string s, reverse the order of the words.

// Input: s = "the sky is blue"
// Output: "blue is sky the"

const reverseString = (str) => {
  let output = '';
  str = str.split(' ');
  console.log(str);
  for(var i = str.length - 1; i >= 0; i--){
    output = output + str[i] + " ";
  };
  return output;
}

// console.log(reverseString("the sky is blue"));

// Difference between throttle and debouncing. And implementation of both of them.

// debounce -- if a user does multiple duplicate events we should avoid duplicate events.

// throttle --  if should make only one api call in a particular amount of duration,
// all other api calls in that duration should be canceled.


// debounce;

const apiFn = () => {
  // const apiResult = await fetch('./abcdef');
  const result = "abc";
  return result;
}

const debounce = (fn, delay) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  }
}

const throttle = (fn, delay) => {
  let prevTime = 0;

  return (...args) => {
    if(prevTime + delay < Date.now()){
      fn(...args);
      prevTime = Date.now();
    }
  }
}

const debounceFn = debounce(apiFn, 600);
const throttleFn = throttle(apiFn, 600);

console.log(debounceFn());
console.log(debounceFn());
console.log(debounceFn());

console.log(throttleFn());
console.log(throttleFn());
console.log(throttleFn());
