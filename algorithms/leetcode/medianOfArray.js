// 4. Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of
// the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

const findMedianSortedArrays = (nums1, nums2) => {
  nums1.forEach((eachNumber) => nums2.push(eachNumber));
  nums2.sort((a, b) => a - b);

  const mid = Math.floor(nums2.length / 2);
  if (nums2.length === 0) return null;
  if (nums2.length % 2 === 0) {
      return (nums2[mid - 1] + nums2[mid]) / 2;
  } else {
      return nums2[mid];
  }

};
