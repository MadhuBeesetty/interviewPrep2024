class TreeNode {
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null; // Root of the tree
  }
  buildTree (array) {
    const nodes = array.map((eachNodeValue) => {
      return new TreeNode(eachNodeValue);
    });

    for(var i = 0; i < nodes.length; i ++){
      let leftNode = nodes[((2*i) +1)];
      let rightNode = nodes[((2*i) +2)];
      if(nodes[i]){
        nodes[i].left = leftNode;
        nodes[i].right = rightNode;
      }
    };
    this.root = nodes[0];
    return this.root;
  };

  inser(nodeValue) {
    const newNode = new TreeNode(nodeValue);

    if(this.root === null){
      return null;
    };
    const queue = [this.root];

    while (queue.length) {
    const current = queue.shift();
   if (!current.left) {
      current.left = newNode;
      return this.root;;
    } else {
      queue.push(current.left);
    };

    if (!current.right) {
      current.right = newNode;
      return this.root;;
    } else {
      queue.push(current.right);
    }
  };
  }
}


const A = new BinaryTree;
const constructedTree = A.buildTree([1,2,3])
const b = A.inser(5);
console.log(b);
