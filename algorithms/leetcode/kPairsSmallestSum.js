// 373. Find K Pairs with Smallest Sums

// You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.

// Define a pair (u, v) which consists of one element from the first array and one element from the second array.

// Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

// Example 1:

// Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
// Output: [[1,2],[1,4],[1,6]]
// Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
// Example 2:

// Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
// Output: [[1,1],[1,1]]
// Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

const kSmallestPairs = (nums1, nums2, k) => {
  const result = [];
  let i = 0, j = 0;

  while (result.length < k && i < nums1.length && j < nums2.length) {
    result.push([nums1[i], nums2[j]]);

    if (i + 1 < nums1.length && (j + 1 >= nums2.length || nums1[i + 1] + nums2[j] < nums1[i] + nums2[j + 1])) {
      i++; // Increment pointer for nums1
    } else {
      j++; // Increment pointer for nums2
    }
  }

  return result;
};

// Example usage:
console.log(kSmallestPairs([1, 7, 11], [2, 4, 6], 3)); // Output: [[1,2],[1,4],[1,6]]
console.log(kSmallestPairs([1, 1, 2], [1, 2, 3], 2)); // Output: [[1,1],[1,1]]