
// 54. Spiral Matrix

// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

const spiralOrder = (matrix) => {
  if (!matrix || matrix.length === 0) return [];

  const result = [];
  let top = 0, bottom = matrix.length - 1;
  let left = 0, right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
      for (let col = left; col <= right; col++) {
          result.push(matrix[top][col]);
      }
      top++;

      for (let row = top; row <= bottom; row++) {
          result.push(matrix[row][right]);
      }
      right--;

      if (top <= bottom) {
          for (let col = right; col >= left; col--) {
              result.push(matrix[bottom][col]);
          }
          bottom--;
      }

      if (left <= right) {
          for (let row = bottom; row >= top; row--) {
              result.push(matrix[row][left]);
          }
          left++;
      }
  }

  return result;
};
