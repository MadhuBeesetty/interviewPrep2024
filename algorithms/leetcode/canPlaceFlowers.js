// 605. Can Place Flowers

// You have a long flowerbed in which some of the plots are planted, and some are not. However,
// flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not
// empty, and an integer n, return true if n new flowers can be planted in the flowerbed without
//  violating the no-adjacent-flowers rule and false otherwise.

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

const canPlaceFlowers = (flowerbed, n) => {
  if (flowerbed.length >= 2 && flowerbed[0] === 0 && flowerbed[1] === 0) {
      flowerbed[0] = 0;
      n--;
  };
  if (flowerbed.length >= 2 && flowerbed[(flowerbed.length - 1)] === 0 && flowerbed[(flowerbed.length - 2)] === 0) {
      flowerbed[(flowerbed.length - 1)] = 0;
      n--;
  };
  for (var i = 1; i < flowerbed.length; i++) {
      if (n <=0) return true;
      if (flowerbed[i - 1] === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
        console.log(i,flowerbed[i - 1],flowerbed[i],flowerbed[i + 1]);
          flowerbed[i] = 0;
          console.log(flowerbed, flowerbed[i]);
          n--;
      }
  }
  return false;
};

console.log(canPlaceFlowers([1,0,0,0,0,1], 2));
