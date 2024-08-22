const promise1 = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
})

promise1.then((value) => {
  console.log(value, "my promise waits for 300 milliseconds and prints value from the promise1 when it is resolve")
});

// console.log(promise1);

const promise3 = Promise.resolve(3);
const promise2 = 42;

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
