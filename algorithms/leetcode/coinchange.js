// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

const coinChange = (coins, amount) => {
    let output = 0;
    let remainingAmount = amount
    for(var i = coins.length - 1; i > 0; i--){
        if(remainingAmount === 0) return output;
            while (coins[i] < remainingAmount) {
              output = output + 1;
              remainingAmount = remainingAmount - coins[i];
              console.log(remainingAmount);
            }
    }
    if(remainingAmount > 0) return -1;
    return output;
}

console.log(coinChange([1, 2, 5], 11));
