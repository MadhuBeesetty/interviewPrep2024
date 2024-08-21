/*
We have a two-dimensional board game involving snakes.  The board has two types of squares on it: +'s represent impassable squares where snakes cannot go, and 0's represent squares through which snakes can move.  Snakes can only enter on the edges of the board, and each snake can move in only one direction.  We'd like to find the places where a snake can pass through the entire board, moving in a straight line.

Here is an example board:

    col-->        0  1  2  3  4  5  6
               +----------------------
    row      0 |  +  +  +  0  +  0  0
     |       1 |  0  0  +  0  0  0  0
     |       2 |  0  0  0  0  +  0  0
     v       3 |  +  +  +  0  0  +  0
             4 |  0  0  0  0  0  0  0

             [4], : [3, 6]


Write a function that takes a rectangular board with only +'s and 0's, and returns two collections:

* one containing all of the row numbers whose row is completely passable by snakes, and
* the other containing all of the column numbers where the column is completely passable by snakes.

Sample Inputs:

board1 = [['+', '+', '+', '0', '+', '0', '0'],
          ['0', '0', '+', '0', '0', '0', '0'],
          ['0', '0', '0', '0', '+', '0', '0'],
          ['+', '+', '+', '0', '0', '+', '0'],
          ['0', '0', '0', '0', '0', '0', '0']]

[4]: [3,6]


board2 = [['+', '+', '+', '0', '+', '0', '0'],
          ['0', '0', '0', '0', '0', '+', '0'],
          ['0', '0', '+', '0', '0', '0', '0'],
          ['0', '0', '0', '0', '+', '0', '0'],
          ['+', '+', '+', '0', '0', '0', '+']]

board3 = [['+', '+', '+', '0', '+', '0', '0'],
          ['0', '0', '0', '0', '0', '0', '0'],
          ['0', '0', '+', '+', '0', '+', '0'],
          ['0', '0', '0', '0', '+', '0', '0'],
          ['+', '+', '+', '0', '0', '0', '+']]

board4 = [['+']]

board5 = [['0']]

board6 = [['0', '0'],
          ['0', '0'],
          ['0', '0'],
          ['0', '0']]

All test cases:

findPassableLanes(board1) => Rows: [4], Columns: [3, 6]
findPassableLanes(board2) => Rows: [], Columns: [3]
findPassableLanes(board3) => Rows: [1], Columns: []
findPassableLanes(board4) => Rows: [], Columns: []
findPassableLanes(board5) => Rows: [0], Columns: [0]
findPassableLanes(board6) => Rows: [0, 1, 2, 3], Columns: [0, 1]

Complexity Analysis:

r: number of rows in the board
c: number of columns in the board */
