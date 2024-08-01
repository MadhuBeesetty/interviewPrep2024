// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1

const maxArea = (height) => {
  let outputarray = [1];
  for(var i = 0; i < height.length; i++){
      for(var j = i+1; j < height.length; j++){
          let heightj = height[i] > height[j] ? height[j] : height[i];
          max = heightj * (j - i);
          console.log(i, j , max);
          if(outputarray[(outputarray.length-1)] < max){
              outputarray.push(max);
          }
      }
  }
  return outputarray[(outputarray.length - 1)];
};

console.log(maxArea([4,3,2,1,4]))
