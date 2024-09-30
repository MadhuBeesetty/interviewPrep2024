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
  if(!root) return null;

  const swap = root.right;
  root.right = root.left;
  root.left = swap;

  invertTree(root.right);
  invertTree(root.left);
  return root;
};

console.log(invertTree(tree));