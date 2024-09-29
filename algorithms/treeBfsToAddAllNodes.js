// Example usage:
class TreeNode {
  constructor(val = 0, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
  }
}

// Create the binary tree [4, 2, 7, 1, 3, 6, 9]
const tree = new TreeNode(4,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, new TreeNode(6), new TreeNode(9))
);

const levelOrderSum = (root) => {
  if(!root) return [];
  const queue = [root];
  let outputArray = [];

  while(queue.length > 0){

    const queueLenght = queue.length;
    let levelSum = 0;

    for(var i = 0; i < queueLenght; i++){
      let node = queue.shift();
      if(node.val) levelSum = levelSum + node.val;
      if(node.left){
          queue.push(node.left);
      };
      if(node.right){
        queue.push(node.right);
      };
    };
    outputArray.push(levelSum);
  }

  return outputArray;
};

console.log(levelOrderSum(tree));
// [4, 2, 7, 1, 3, 6, 9]
