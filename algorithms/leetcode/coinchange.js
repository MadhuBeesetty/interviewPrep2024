// You are given an integer array coins representing coins of different denominations
// and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Input: coins = [1,2,5], amount = 11
// coinCount: 3
// Explanation: 11 = 5 + 5 + 1

// [1,2,5]  amount = 11; coins = 0;

// [5,2] 5,2 reminder 1 //

// array of coins // 5,5,1;
// 5 < 11 = 1 (6) coins = 1;
// 5 < 6 = 1 (1) coins = 2;
// 5< 1
// 2< 1
// 1<=1 0 coins = 3;

// 14 === 5,5,2,2

const coinChange = (coins, amount) => {
  let coinCount = 0;
  coins = coins.sort((a,b) => b - a);
    const calculatingCoins = (coins, amount, coinCount, i) => {
      if(i === -1 || amount === 0) {
        if(amount > 0) return -1;
        return coinCount;
      }
      if(amount >= coins[i]){
        coinCount = coinCount + 1
        amount = amount - coins[i];
        return calculatingCoins(coins, amount, coinCount, i);
      }else{
        return calculatingCoins(coins, amount, coinCount, i - 1);
      }
    }
  return calculatingCoins(coins, amount, coinCount, i = coins.length - 1);
}
console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
