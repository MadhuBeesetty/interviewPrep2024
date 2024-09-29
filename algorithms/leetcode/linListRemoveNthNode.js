// 19. Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }

  // Method to append a new value at the end of the linked list
  append(value) {
      const newNode = new Node(value);

      if (this.head === null) {
          // If the list is empty, set the new node as the head
          this.head = newNode;
      } else {
          // Traverse to the last node
          let current = this.head;
          while (current.next !== null) {
              current = current.next;
          }
          // Add the new node to the end of the list
          current.next = newNode;
      }
  }

  // Method to convert an array to a linked list
  arrayToLinkedList(arr) {
      for (let i = 0; i < arr.length; i++) {
          this.append(arr[i]);
      }
  }
}

// Example usage:
const list = new LinkedList();

// Simple array
const arr = [1,2,3,4,5];

// Convert array to linked list
list.arrayToLinkedList(arr);

const removeNthFromEnd = (head, n) => {
  if (!head) return null;

  const dummy = new Node(0);
  dummy.next = head;
  let fast = dummy;
  let slow = dummy;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;  // Return the new head
};

console.log(removeNthFromEnd(list.head, 2));
