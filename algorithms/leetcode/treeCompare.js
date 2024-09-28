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

let tree1 = insertLevelOrder([1,2,3]);
let tree2 = insertLevelOrder([1,2,3]);

const isSameTree = (p, q) => {
  // If both nodes are null, the trees are the same
  if (!p && !q) {
    return true;
  }

  // If one of the nodes is null and the other is not, the trees are different
  if (!p || !q) {
    return false;
  }

  // If the values of the nodes are different, the trees are different
  if (p.val !== q.val) {
    return false;
  }

  // Recursively check the left and right subtrees
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.log(isSameTree(tree1, tree2));
