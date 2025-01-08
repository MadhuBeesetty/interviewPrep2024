class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

class BinaryTree {
  constructor (){
    this.root = null;
  }

  insert(value){
    let newNode = new TreeNode(value);
    if(!this.root){
      this.root = newNode;
      return newNode;
    }
    let current = this.root;
    while(true){
      if(current.value > value){
        if(!current.left){
          current.left = newNode;
          return;
        }
        current = current.left;
      }else if (value > current.value){
        if(!current.right){
          current.right = newNode;
          return;
        }
        current = current.right;
      } else{
        return;
      }
    }
  }

  preorder(current = this.root){
    // node left right
    if(!current) return;
    console.log(current.value);
      this.preorder(current.left);
      this.preorder(current.right);
  }

  postOrder(current = this.root) {
    // left right node
    if(! current) return;
    this.postOrder(current.left);
    this.postOrder(current.right);
    console.log(current.value);
  }

  inOrder(current = this.root) {
    if(!current) return;
    this.inOrder(current.left);
    console.log(current.value);
    this.inOrder(current.right);
  }

  search(current = this.root, compareValue) {
    if(!current) return false;
    if(current.value === compareValue) {
      console.log(`found the value: ${compareValue}`)
      return true;
    }
    this.search(current.left, compareValue);
    this.search(current.right, compareValue);
    return false;
  }

  maxDepthDFS(current = this.root, depth = 0) {
    if(!current) return depth;
    return Math.max(
      this.maxDepth(current.left, depth + 1),
      this.maxDepth(current.right, depth + 1)
  );
  }

  maxDepthBFS(current = this.root, depth = 0) {
    let queue = [];
    if(!current) return depth;
    let innerLength = 0;
    if(current.left){
      queue.push(current.left);
    };
    if(current.right){
      queue.push(current.right);
    };

    while(queue.length > 0){
      innerLength = queue.length;
      for(var i = 0; i < innerLength; i++){
        current = queue.shift();
        if(current.left){
          queue.push(current.left);
        };
        if(current.right){
          queue.push(current.right);
        };
      }
      depth++;
    }
    return depth;
  }

}

const A = new BinaryTree();
A.insert(5);
A.insert(4);
A.insert(6);
A.insert(3);
A.insert(7);
A.insert(2);
A.insert(8);
A.insert(10);
A.insert(9);
// A.preorder();
// A.postOrder();
// A.inOrder();
A.search(this.root, 10);
console.log(A.maxDepthDFS(this.root));
console.log(A.maxDepthBFS(this.root));
export default A;
