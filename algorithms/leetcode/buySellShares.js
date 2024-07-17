/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = Infinity;
  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    var profit = prices[i + 1] - minPrice;
    if (profit > maxProfit) maxProfit = profit;
  }

  return maxProfit;
};


console.log(maxProfit([7, 1, 5, 3, 6, 4]));