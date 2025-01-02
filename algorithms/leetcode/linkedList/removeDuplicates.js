// 83. Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates such that each element appears
// only once. Return the linked list sorted as well.

// * function ListNode(val, next) {
// *     this.val = (val===undefined ? 0 : val)
// *     this.next = (next===undefined ? null : next)
// * }
// */

// Example 1:

// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:


// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

const deleteDuplicates = (head) => {
  let current = head;
  while (current && current.next) {
      if (current.val === current.next.val) {
          current.next = current.next.next; // Skip duplicate
      } else {
          current = current.next; // Move to the next node
      }
  }
  return head;
}
