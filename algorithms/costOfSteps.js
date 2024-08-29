// implement a dynamic programming to claculate minimum cost required to climb all step.
// steps are represented by a array
// you can climb one step or two steps at a time.


// console.log(recfun([1, 10, 20, 15, 3, 6, 9, 8]));
// console.log(recfun([1, 10, 21, 25, 24, 30, 33, 38]));

const recfun = (input) => {
  // [1, 10, 20, 15, 3, 6, 9, 8]
  // [1, 10, 21, 25, 24, 30, 33, 38]
  // ans[1,20,3,6,8]

    if(input.length <= 2) return Math.min(input[1], input[0]);

    const minCal = (input, i) => {
        if(i === input.length) return Math.min(input[input.length - 1], input[input.length - 2]);
        input[i] = Math.min(input[i - 1], input[i - 2]) + input[i];
        return minCal(input, i + 1);
    }
    return minCal(input, 2);
}

console.log(recfun([1, 10, 20, 15, 3, 6, 9, 8]));