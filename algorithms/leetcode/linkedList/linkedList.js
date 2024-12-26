// linked list end to end.

// A linked list is similar to an array where there will be sequence of elements that store data,
// but in linkedlist the biggest difference from an array is, every node in linked list has two
// parameters, a node that holds the value and the next parameter which points to the next node in linkedlist.

class Node {
  constructor(element, next = null) {
    this.element = element;
    this.next = next;
  }
};

// the above simple class represents a single node.
// every node has a element value and a pointer to next node.

// -----------------------------

// Example 2: This example, shows a Linked List class with a constructor
// and a list of methods to be implemented. Linked List class has two
// properties: i.e. head and size, where the head stores the first node of a List,
//  and size indicates the number of nodes in a list.

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
  };

  // insert a node at first position
  insertFirst (node){
    this.head = new Node(node, this.head);
    this.size++;
  }

  // insert an element at last position
insertLast (node){
  if(this.head === null){
    this.head = new Node(node);
  }
  let current = this.head;
  while(current.next){
    current = current.next;
  }
  current.next = new Node(node);
  this.size++;
}

// insert an element at an index
insertAtIndex (node, index){
  if (index < 0 || index > this.size) {
    console.error("Index out of bounds");
    return;
}
  let currentPosition = 0;
  let current = this.head;
  let previous;
  while(current.next){
    previous = current;
    current = current.next;
    currentPosition++;
    if(currentPosition === index){
      previous.next = new Node(node, current);
      this.size++;
      return;
    }
  }
}

// get value at index
getAtIndex (index){
  if (index < 0 || index > this.size) {
    console.error("Index out of bounds");
    return;
}
  let currentPosition = 0;
  let current = this.head;
  while(current.next){
    current = current.next;
    currentPosition++;
    if(currentPosition === index){
      console.log(current.element);
      return current.element;
    }
  }
}

// remove an element at an index
removeAtIndex (index){
  if (index < 0 || index > this.size) {
    console.error("Index out of bounds");
    return;
}
  let currentPosition = 0;
  let current = this.head;
  let previous;
  while(current.next){
    previous = current;
    current = current.next;
    currentPosition++;
    if(currentPosition === index){
      previous.next = current.next;
      this.size--;
      return;
    }
  }
}

printAllData (){
  let current = this.head;
  while(current.next){
    console.log(current.element);
    current = current.next;
  }
}

};

// const LLlearning = new Linkedlist();
// LLlearning.insertFirst(5);
// LLlearning.insertFirst(6);
// LLlearning.insertLast(7);
// LLlearning.insertAtIndex(1,1);
// LLlearning.insertAtIndex(1,2);
// LLlearning.insertAtIndex(1,3);
// console.log(LLlearning);
// LLlearning.removeAtIndex(1);
// console.log(LLlearning);
// LLlearning.printAllData();
// LLlearning.getAtIndex(4);

/////////////////////////////////
// practice again

class NodePrac {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
};

class Linkedlist1 {
  constructor(){
    this.head = null;
    this.size = 0;
  }

  insertFirst (value) {
      this.head = new NodePrac(value);
      this.size++;
  }

  insertLast(value) {
    const newNode = new NodePrac(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  insertAtIndex (value, index){
    if (index < 0 || index > this.size) {
      console.error("Index out of bounds");
      return;
  }
    let currentPosition = 0;
    let current = this.head;
    let previous;
    while(current.next){
      previous = current;
      current = current.next;
      currentPosition = currentPosition + 1;
      if(currentPosition === index){
        previous.next = new NodePrac(value, current);
      this.size++;
      return;
      };
    };
  }

  getAtIndex (index){
    let currentPosition = 0;
    let current = this.head;
    if(currentPosition === index){
      return current.value;
    };
    let previous;
    while(current.next){
      previous = current;
      currentPosition = currentPosition + 1;
      current = previous.next;
      if(currentPosition === index){
        return current.value;
      }
    }
  };

  getAllNodeValues () {
    let current;
    if(this.size > 0){
      current = this.head;
    };
    let previous;
    while(current !== null){
      console.log(current.value, "this is current value");
      previous = current;
      current = current.next;
    }
  }

  removeAtIndex(index) {
    if (index < 0 || index > this.size) {
      console.error("Index out of bounds");
      return;
  }
  let current = this.head;
  let currentPosition = 0;
  let previous = null;
  while(current.next){
    if(currentPosition === index){
      if(index === 0){
        this.head = current.next;
        current.next = null;
        this.size--;
        return;
      }
      previous.next = current.next;
      this.size--;
      return;
    };
    previous = current;
    current = current.next;
    currentPosition++;
  }
  }
}

const a = new Linkedlist1();
a.insertFirst(5);
a.insertLast(6);
a.insertLast(7);
a.insertAtIndex(1,2);
a.insertLast(8);
a.getAllNodeValues();
a.removeAtIndex(2);
console.log(a);
a.getAllNodeValues();
a.removeAtIndex(0);
console.log(a);
