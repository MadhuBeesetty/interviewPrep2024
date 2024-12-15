// // Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// // Each row must contain the digits 1-9 without repetition.
// // Each column must contain the digits 1-9 without repetition.
// // Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// // Note:

// // A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// // Only the filled cells need to be validated according to the mentioned rules.

// Input: board =
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

const isValidSudoku = (board) => {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
          const cell = board[row][col];
          if (cell === ".") continue;

          const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

          // Check if the value already exists in the row, column, or box
          if (rows[row].has(cell) || cols[col].has(cell) || boxes[boxIndex].has(cell)) {
              return false;
          }

          // Add the value to the row, column, and box
          rows[row].add(cell);
          cols[col].add(cell);
          boxes[boxIndex].add(cell);
      }
  }

  return true;
}

console.log(isValidSudoku(
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
));
