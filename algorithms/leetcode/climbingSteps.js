// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

const climbStairs = (n) => {
    let stairsData = [0,1,2];
    let startCalsulatingPoint = 3;
    while(startCalsulatingPoint <= n){
        stairsData[startCalsulatingPoint] =
          stairsData[startCalsulatingPoint - 1] +
          stairsData[startCalsulatingPoint - 2];
        startCalsulatingPoint = startCalsulatingPoint + 1;
    }
    return stairsData[n];
};

console.log(climbStairs(5));
console.log(climbStairs(3));

const climStairsRecursion = (n) => {
    let initialStairs = [0,1,2];
    let startCalsulatingPoint = 3;
    const stairWayCalculation = (stepnumber) => {
        if(stepnumber > n) return initialStairs[n];
        initialStairs[stepnumber] = initialStairs[stepnumber - 1]+ initialStairs[stepnumber - 2];
        return stairWayCalculation(stepnumber + 1);
    }
    return stairWayCalculation(startCalsulatingPoint);
}

console.log(climStairsRecursion(5));
console.log(climStairsRecursion(3));
