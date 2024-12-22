// 2666. Allow One Function Call

// Given a function fn, return a new function that is identical to the original function
// except that it ensures fn is called at most once.

// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.

const once = (fn) => {
  let hasBeenCalled = false;
  return (...args) => {
    if(hasBeenCalled){
       return undefined
    }else{
      hasBeenCalled = true;
      return fn(...args);
    }
  };
};

let fn = (x) => console.log(x);

let countFn = once(fn);

countFn("madhu");
countFn("sudhan");
countFn("beesetty");
