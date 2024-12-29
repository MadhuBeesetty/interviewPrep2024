// 61. Rotate List

// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:


// Input: head = [0,1,2], k = 4
// Output: [2,0,1]


// Constraints:

// The number of nodes in the list is in the range [0, 500].

const rotateRight = (head, k) => {
  if (!head || !head.next || k === 0) return head;

  let length = 1;
  let tail = head;
  while (tail.next) {
      tail = tail.next;
      length++;
  }

  k = k % length;
  if (k === 0) return head;

  let prev = null;
  let current = head;
  let stepsToNewHead = length - k;
  while (stepsToNewHead > 0) {
      prev = current;
      current = current.next;
      stepsToNewHead--;
  }

  prev.next = null;
  tail.next = head;
  head = current;

  return head;
};
