import { dummyData } from "./response";

export const getStoreFeed = () => {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation, e.g., fetching data
    setTimeout(() => {
      // Resolve the promise with the dummy data
      resolve(dummyData);

      // If you want to simulate an error, you can use reject instead
      // reject(new Error('Simulated error'));
    }, 1000); // Simulating a delay of 1 second
  });
};
