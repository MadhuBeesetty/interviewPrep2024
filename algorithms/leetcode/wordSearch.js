// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:


// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

const exist = (board, word) => {
  const rows = board.length;
  const cols = board[0].length;

  const dfs = (row, col, index) => {

    if (index === word.length) return true;
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    const temp = board[row][col];
    board[row][col] = '#';

    const found =
      dfs(row - 1, col, index + 1) || // Top
      dfs(row + 1, col, index + 1) || // Bottom
      dfs(row, col - 1, index + 1) || // Left
      dfs(row, col + 1, index + 1);   // Right

    board[row][col] = temp;

    return found;
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (dfs(row, col, 0)) return true;
    }
  }

  return false; // If no valid path found
};
