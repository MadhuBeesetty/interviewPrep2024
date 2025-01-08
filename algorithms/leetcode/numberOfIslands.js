// 200. Number of Islands

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
//  return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or
// vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

const numIslands = (inputArray) => {
  const rows = inputArray.length;
  const cols = inputArray[0].length;

  let islandCount = 0;

  let referenceArray = Array.from({ length: rows }, () => Array(cols).fill(false));

  const dfs = (i,j) => {

    if (
      i < 0 || j < 0 || i >= rows || j >= cols ||
      inputArray[i][j] === "0" || referenceArray[i][j]
  ) {
      return;
  }

  referenceArray[i][j] = true;

    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);

  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (inputArray[i][j] === "1" && !referenceArray[i][j]) {
            islandCount++;
            dfs(i, j);
        }
      }
  }
  return islandCount; // Return the total number of islands
};

// Example usage
const inputArray = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];

const inputArray1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","1"]
]

console.log(numIslands(inputArray1)); // Output: 3
