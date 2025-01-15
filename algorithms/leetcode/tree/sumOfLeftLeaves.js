// 404. Sum of Left Leaves

// Given the root of a binary tree, return the sum of all left leaves.

// A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
// Example 2:

// Input: root = [1]
// Output: 0

const sumOfLeftLeaves = (root) => {

  let sum = 0;
  const traverseTree = (node) => {
      if (!node) {
          return;
      }

      if (!node.left?.left && !node.left?.right) {
          sum += node.left?.val ?? 0;
      }

      traverseTree(node.left)
      traverseTree(node.right)
  }
  traverseTree(root)
  return sum;
};
