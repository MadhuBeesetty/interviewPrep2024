// 2658. Maximum Number of Fish in a Grid

// You are given a 0-indexed 2D matrix grid of size m x n, where (r, c) represents:

// A land cell if grid[r][c] = 0, or
// A water cell containing grid[r][c] fish, if grid[r][c] > 0.
// A fisher can start at any water cell (r, c) and can do the following operations any number of times:

// Catch all the fish at cell (r, c), or
// Move to any adjacent water cell.
// Return the maximum number of fish the fisher can catch if he chooses his starting cell optimally,
//  or 0 if no water cell exists.

// An adjacent cell of the cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) or
// (r - 1, c) if it exists.

// Example 1:

// Input: grid = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]]
// Output: 7
// Explanation: The fisher can start at cell (1,3) and collect 3 fish, then move to cell (2,3) and
// collect 4 fish.
// Example 2:

// Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]]
// Output: 1
// Explanation: The fisher can start at cells (0,0) or (3,3) and collect a single fish.

const findMaxFish = (grid) => {
  const rows = grid.length;
  const cols = grid[0].length;

  const directions = [
      [0, 1], // right
      [0, -1], // left
      [1, 0], // down
      [-1, 0] // up
  ];


  const dfs = (r, c, visited) => {
      if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0 || visited.has(`${r},${c}`)) {
          return 0;
      }

      visited.add(`${r},${c}`);
      let totalFish = grid[r][c];

      for (const [dr, dc] of directions) {
          totalFish += dfs(r + dr, c + dc, visited);
      }

      return totalFish;
  };

  let maxFish = 0;

  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (grid[r][c] > 0) {
              const visited = new Set();
              maxFish = Math.max(maxFish, dfs(r, c, visited));
          }
      }
  }

  return maxFish;
};
