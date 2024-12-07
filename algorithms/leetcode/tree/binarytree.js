class TreeNode {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  static buildTree (array){
    if(array.length === 0) return;

    const nodes = array.map((eachNodeValue) => new TreeNode(eachNodeValue));

    for(var i = 0; i < nodes.length; i++){
      let leftNode = nodes[(2*i + 1)];
      let rightNode = nodes[(2*i + 2)];
      nodes[i].left = leftNode;
      nodes[i].right = rightNode;
    }
    return nodes[0];
  }
};

const A = new TreeNode();
let binaryTree = TreeNode.buildTree([1,2,3,4,5,6,7,8]);
console.log(binaryTree);
