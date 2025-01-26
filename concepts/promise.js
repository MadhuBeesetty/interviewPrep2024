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

// this async function returns a promise in return:

const fetchTodos = async (skip) => {
  const response = await fetch(`https://dummyjson.com/todos?limit=${todosLimit}&skip=${skip}`);
  const data = await response.json();
  return data.todos;
}

// we can rewrite this using error handeling and accepting actual promises:

const fetchTodos = async (skip) => {
  try {
      const response = await fetch(`https://dummyjson.com/todos?limit=${todosLimit}&skip=${skip}`);

      // Check if response is okay (status in the range 200-299)
      if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data.todos;
  } catch (error) {
      console.error('Failed to fetch todos:', error);

      // Optionally, you can return an empty array or null to avoid breaking the rest of your code
      return [];
  }
};
