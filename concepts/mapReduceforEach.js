let arr = [1,2,3,4,5,6]

let sum = 0;

console.log(arr.forEach((each) => {sum = sum + each}), "for each");

console.log(sum, "foreach");

arr = [1,2,3,4,5,6]
sum = 0;
console.log(arr.map((e) => sum = sum + e), "whole map");

console.log(sum, "map");

arr = [1,2,3,4,5,6]
 sum = 0;
 console.log(arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  sum,
), "reduce");

console.log(sum, "reduce"); // this will be zero as reduce explicity returns the output
