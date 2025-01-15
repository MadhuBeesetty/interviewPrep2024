// 73. Set Matrix Zeroes

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// Example 1:

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:


// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

const setZeroes = (matrix) => {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let firstRowHasZero = false;
  let firstColHasZero = false;

  // Check if the first row or first column has zeros
  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) firstColHasZero = true;
  }
  for (let j = 0; j < cols; j++) {
    if (matrix[0][j] === 0) firstRowHasZero = true;
  }

  // Use the first row and column to mark zeros
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // Zero out cells based on markers in the first row and column
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // Zero out the first row if needed
  if (firstRowHasZero) {
    for (let j = 0; j < cols; j++) {
      matrix[0][j] = 0;
    }
  }

  // Zero out the first column if needed
  if (firstColHasZero) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
};

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));
console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));
