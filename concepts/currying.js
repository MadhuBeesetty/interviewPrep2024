// // currying is a higher order function where one function can take another function as an input parameter.

// // Non-curried version
// const add = (x, y) => {
//   return x + y;
// }

// add(2, 3); // 5

// // Curried version
// const curriedAdd = (x) => {
//   return (y) => {
//     return x + y;
//   };
// }

// const addTwo = curriedAdd(2);
// console.log(addTwo(8)); // 10

// // You can also call it in one go
// console.log(curriedAdd(2)(3)); // 5
// ////

const addTwoo = (x,y) => {
  return x+y;
}

const addTwoPart1 = (x) => {
  return (y) => x+y;
};

const addTwoPart2 = addTwoPart1(4);
console.log(addTwoPart2(6));
