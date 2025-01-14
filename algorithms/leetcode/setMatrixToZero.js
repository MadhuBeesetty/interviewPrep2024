// 73. Set Matrix Zeroes

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and
//  column to 0's.

// You must do it in place.

// Example 1:

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]
// Example 2:


// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

const setZeroes = (matrix) => {
let outputArray = matrix.map(row => [...row]);
  const convertToZeros = (i,j) => {
    for(var a = 0; a < matrix.length; a++){
      outputArray[i][a] = 0;
    };
    for(var b = 0; b < matrix[0].length; b++){
      outputArray[b][j] = 0;
    }
  };
  for(var i = 0; i < matrix.length; i++){
    for(var j = 0; j< matrix[0].lenght; j++){
      if(matrix[i][j] === 0){
        convertToZeros(i,j);
      }
    }
  };
  return outputArray;
};

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));
