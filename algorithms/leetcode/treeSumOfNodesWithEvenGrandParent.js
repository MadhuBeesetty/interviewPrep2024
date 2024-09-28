// 1315. Sum of Nodes with Even-Valued Grandparent

// Given the root of a binary tree, return the sum of values of nodes with an even-valued grandparent. If there are no nodes with an even-valued grandparent, return 0.

// A grandparent of a node is the parent of its parent if it exists.

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 18
// Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.

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

const inputArray = [6, 7, 8, 2, 7, 1, 3, 9, null, 1, 4, null, null, null, 5];

// Construct the tree
const root = insertLevelOrder(inputArray);

const sumEvenGrandparent = (root) => {
  let totalSum = 0;

  const dfs = (node, parent, grandparent) => {
      if (!node) return;
      if (grandparent !== null && grandparent % 2 === 0) {
          console.log(node.val, grandparent);
          totalSum = totalSum + node.val;
      }

      dfs(node.left, node.val, parent);
      dfs(node.right, node.val, parent);
  };

  dfs(root, null, null);

  return totalSum;
};

console.log(sumEvenGrandparent(root), "function solution");
