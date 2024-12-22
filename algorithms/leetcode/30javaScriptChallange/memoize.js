// 2623. Memoize

// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs.
//  Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b. Assume that if a value has already been
// cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b).
// For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

const memoize = (fn) => {
  const cache = new Map();
  return function (...args) {
      let key = JSON.stringify(args);
      if (cache.has(key)) {
          return cache.get(key);
      }
      else {
          let ans = fn(...args);
          cache.set(key, ans);
          return ans;
      }
  }
}

let callCount = 0;
const memoizedFn = memoize( (a, b) => {
	 callCount += 1;
   console.log("i am in the fucntion");
   return a + b;
 })
 console.log(memoizedFn(2, 3)) // 5
 console.log(memoizedFn(2, 3)) // 5


 const slowSquare = (n) => {
  console.log('Computing square...');
  return n * n;
};

const memoizedSquare = memoize(slowSquare);

console.log(memoizedSquare(5)); // Logs "Computing square..." and returns 25
console.log(memoizedSquare(5)); // Returns 25 instantly (from cache)
console.log(memoizedSquare(10)); // Logs "Computing square..." and returns 100
