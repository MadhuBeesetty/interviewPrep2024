// write an sync function to get square of a number.

const square = (num, callback) => {
  if(typeof(num) !== "number"){
    callback("error");
    return;
  }
  const result = num * num;
  setTimeout(() => callback(null, result), 100);
};

const printCallback = (error, result) => {
  if(error !== null){
    console.log(`input is not a number ${error}`);
    return;
  }
console.log(result, "this is the square of the number");
}

square("5", printCallback);
square(5, printCallback);
