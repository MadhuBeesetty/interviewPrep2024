// 42. Trapping Rain Water

// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.

// Example 1:

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
// In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

const trap = (height) => {
    let area = 0;

    const calculateArea = (width, height) => {
        area += width * height;
    };

    for (let i = 1; i < height.length - 1; i++) {
        const leftMax = Math.max(...height.slice(0, i));
        const rightMax = Math.max(...height.slice(i + 1));

        const minHeight = Math.min(leftMax, rightMax);

        if (minHeight > height[i]) {
            calculateArea(1, minHeight - height[i]);
        }
    }

    return area;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trap([4,2,0,3,2,5]));
