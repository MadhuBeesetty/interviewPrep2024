// ccording to Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.

// ex1:

// Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
// Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

// ex2:

// Input: board = [[1,1],[1,0]]
// Output: [[1,1],[1,1]]

const gameOfLife = (board) => {
    let rows = board.length;
    let cols = board[0].length;
    let outBoard = new Array(rows).fill(null).map(() => new Array(cols).fill(0));

    const directions = [
        [-1, 0], [1, 0],  // Top, Bottom
        [0, -1], [0, 1],  // Left, Right
        [-1, -1], [-1, 1],  // Top-left, Top-right
        [1, -1], [1, 1]   // Bottom-left, Bottom-right
    ];
    const countLiveNeighbors = (r, c) => {
        let liveNeighbors = 0;

        for (let [dr, dc] of directions) {
            let newRow = r + dr;
            let newCol = c + dc;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && board[newRow][newCol] === 1) {
                liveNeighbors++;
            }
        }

        return liveNeighbors;
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let liveNeighbors = countLiveNeighbors(i, j);

            if (board[i][j] === 1) {
                if (liveNeighbors < 2 || liveNeighbors > 3) {
                    outBoard[i][j] = 0;
                } else {
                    outBoard[i][j] = 1;
                }
            } else {
                if (liveNeighbors === 3) {
                    outBoard[i][j] = 1;
                }
            }
        }
    }

    return outBoard;
};

console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]));
console.log(gameOfLife([[1,1],[1,0]]));
