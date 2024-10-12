// function getNameById(id, callback) {
//   // simulating async request
//   const randomRequestTime = Math.floor(Math.random() * 100) + 200;

//   setTimeout(() => {
//     callback("User" + id);
//   }, randomRequestTime);
// }

// function mapLimit(inputs, limit, iterateeFn, callback) {

// }

// // Usage
// console.log(
//   mapLimit([1, 2, 3, 4, 5], 2, getNameById, (allResults) => {
//     console.log(allResults); // ["User1", "User2", "User3", "User4", "User5"]
//   })
// );

// write an algorithm as showen above where a function takes four parameters arra,
// limiter, a function and a call back function.

// the expected out put of the function is ["User1", "User2", "User3", "User4", "User5"]


function getNameById(id, callback) {
  // simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;

  setTimeout(() => {
    callback("User" + id);
  }, randomRequestTime);
}

function mapLimit(inputs, limit, iterateeFn, callback) {

}


console.log(
  mapLimit([1, 2, 3, 4, 5], 2, getNameById, (allResults) => {
    console.log(allResults); // ["User1", "User2", "User3", "User4", "User5"]
  })
);
