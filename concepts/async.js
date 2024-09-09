function getNameById(id, callback) {
  // Simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;

  setTimeout(() => {
    callback("User" + id);
  }, randomRequestTime);
}

function mapLimit(inputs, limit, iterateeFn, callback) {
  let results = [];
  let activeRequests = 0;
  let currentIndex = 0;

  function processNext() {
    // If all inputs have been processed, call the final callback with results
    if (results.length === inputs.length) {
      return callback(results);
    }

    // If active requests are within the limit, and there are more items to process
    while (activeRequests < limit && currentIndex < inputs.length) {
      activeRequests++;
      const index = currentIndex;
      currentIndex++;

      iterateeFn(inputs[index], (result) => {
        results[index] = result;
        activeRequests--;
        processNext();
      });
    }
  }

  // Start the initial batch of requests
  processNext();
}

// Usage
mapLimit([1, 2, 3, 4, 5], 2, getNameById, (allResults) => {
  console.log(allResults); // Expected: ["User1", "User2", "User3", "User4", "User5"]
});
