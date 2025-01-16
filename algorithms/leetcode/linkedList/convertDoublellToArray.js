// 3263. Convert Doubly Linked List to Array I

// You are given the head of a doubly linked list, which contains nodes that have a next pointer and a previous pointer.

// Return an integer array which contains the elements of the linked list in order.

// Example 1:

// Input: head = [1,2,3,4,3,2,1]

// Output: [1,2,3,4,3,2,1]

// Example 2:

// Input: head = [2,2,2,2,2]

// Output: [2,2,2,2,2]

// Example 3:

// Input: head = [3,2,3,2,3,2]

// Output: [3,2,3,2,3,2]

const toArray = (head) => {
  let arr = [];
  let current = head;
  if (!current) {
      return arr;
  };
  while (current) {
      arr.push(current.val);
      current = current.next;
  };
  return arr;
};
