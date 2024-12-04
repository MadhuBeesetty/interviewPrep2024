// linked list end to end.

// A linked list is similar to an array where there will be sequence of elements that store data,
// but in linkedlist the biggest difference from an array is, every node in linked list has two
// parameters, a node that holds the value and the next parameter which points to the next node in linkedlist.

class node {
  constructor(element) {
    this.element = element;
    this.next = null
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

  // creating a method to add an element to linkedlist
  add(element){
    let node1 = new node(element);
    let current;
    if(this.head === null){
      this.head = node1;
    }else{
      current = this.head;
      while(current.next !== null){
        current = current.next;
      };
      current.next = node1;
    }
    this.size++;
  };

  // create a method to insert an element at a particular index;
  insert(element, index){
    let node1 = new node(element);
    let current;
    let currentPosition = 0;
    if(this.head === null){
      return;
    }else{
      current = this.head;
      while(current.next !== null){
        if(currentPosition === index){
          let temporary = current.next;
          current.next = node1;
          node1.next = temporary;
          this.size++;
          return;
        }
        current = current.next;
        currentPosition++;
      }
    }
  }

// create a method to remove an node from linked list

remove(index) {
  if (index < 0 || index >= this.size) {
    console.log("Invalid index");
    return;
  }

  let current = this.head;
  if (index === 0) {
    // Remove the head node
    this.head = current.next;
  } else {
    let previous = null;
    let currentPosition = 0;

    // Traverse to the node at the given index
    while (currentPosition < index) {
      previous = current;
      current = current.next;
      currentPosition++;
    }

    // Remove the node by updating the previous node's next pointer
    previous.next = current.next;
  }
  this.size--;
}

printList()
{
    let curr = this.head;
    let str = "";
    while (curr) {
        str += curr.element + " ";
        curr = curr.next;
    }
    console.log(str);
}

indexOf(element)
{
    let count = 0;
    let current = this.head;
    while (current != null) {
        // compare each element of the list
        // with given element
        if (current.element === element)
            return count;
        count++;
        current = current.next;
    }
    // not found
    return -1;
}

};

const NewNode = new node(5);
const LLlearning = new Linkedlist();
LLlearning.add(NewNode);
LLlearning.add(6);
LLlearning.add(7);
LLlearning.add(8);
LLlearning.insert(2,1);
LLlearning.insert(10,0);
console.log(LLlearning);
LLlearning.remove(2);
console.log(LLlearning);
LLlearning.remove(0);
LLlearning.printList();
LLlearning.indexOf(8);
console.log(LLlearning);
