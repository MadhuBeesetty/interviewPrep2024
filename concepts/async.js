function getNameById(id, callback) {
  // simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;

  setTimeout(() => {
    callback("User" + id);
  }, randomRequestTime);
}

function mapLimit(inputs, limit, iterateeFn, callback) {
  let outPutArr = [];

  const userGenerator = (str) => {
    outPutArr.push(str);
    callback(outPutArr);
  };

  inputs.map(async (eachInput, id) => {
    await iterateeFn(eachInput, userGenerator);
  });
}

// Usage
console.log(
  mapLimit([1, 2, 3, 4, 5], 2, getNameById, (allResults) => {
    console.log(allResults); // ["User1", "User2", "User3", "User4", "User5"]
  })
);
