// 226. Invert Binary Tree

// Given the root of a binary tree, invert the tree, and return its root.

// Example 1:

// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Example 2:


// Input: root = [2,1,3]
// Output: [2,3,1]
// Example 3:

// Input: root = []
// Output: []

class TreeNode {
  constructor(val, left = null, right = null) {
      this.val = val === undefined ? 0 : val;
      this.left = left;
      this.right = right;
  }
}

const insertLevelOrder = (arr, root = null, i = 0) => {
  // Base case for recursion
  if (i < arr.length) {
      if (arr[i] !== null) {
          root = new TreeNode(arr[i]); // Create a new node
          // Recursively build the left and right subtrees
          root.left = insertLevelOrder(arr, root.left, 2 * i + 1);
          root.right = insertLevelOrder(arr, root.right, 2 * i + 2);
      }
  }
  return root;
}

let tree = insertLevelOrder([4,2,7,1,3,6,9]);

const invertTree = (root) => {
  let current = root;
  if (!current) return null;

  [current.left, current.right] = [current.right, current.left];
  invertTree(current.left);
  invertTree(current.right);
  return root;
};

console.log(invertTree(tree));
