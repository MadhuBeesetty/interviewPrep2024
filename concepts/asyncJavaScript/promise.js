// const newPromise = new Promise((resolve,reject) => {
//   reject("reject hello world");
//   resolve("hello world");
// });

// newPromise.catch((value) => {
//   console.log(value);
// })

// newPromise.then((value) => {
//   console.log(value);
// })

// console.log("this is after the promise is resolved");

const calculateSquares = (number) => {
    const squaresPromise = new Promise((resolve, reject) => {
      setTimeout(
        () => {
          if(typeof(number) !== "number"){
            reject("input is a string")
          }else{
            resolve(number * number);
          }
        }, 1000
      )
    });
    return squaresPromise;
};

// calculateSquares(2).then((value) => { console.log(value)}).catch((reson) => {console.log("error" + reson)});
// calculateSquares("2").then((value) => { console.log(value)}).catch((reson) => {console.log("error" + reson)});

const newtestingfun = (num) => {
  const newProm = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof (num) !== "number"){
        reject("input is not a number");
      }else{
        resolve(num*num);
      };
    }, 1000);
  })
  return newProm;
}

newtestingfun(5).then((value) => {console.log(value)}).catch((rejectionError) => {console.log(rejectionError)});
