// a callback function is a function that is passed as an argument to a function.

const print = (number) => {
  console.log(number);
}

let arr = [1,2,3,4];

// arr.forEach(print);

// print is the callback function to forEach here and forEach calls print function 4 times.


// let write an async fun with a callback.

const asyncCallback = (callbackfun) => callbackfun();

const callbackfun = () => console.log("i am callback fun");
asyncCallback(callbackfun);
console.log("i am just a log");
