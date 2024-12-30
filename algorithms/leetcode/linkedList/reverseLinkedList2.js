// 92. Reverse Linked List II

// Given the head of a singly linked list and two integers left and right where left <= right,
//  reverse the nodes of the list from position left to position right, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]

const reverseBetween = (head, left, right) => {
  if (!head || left === right) return head;

  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  for (let i = 1; i < left; i++) {
      prev = prev.next;
  }

  let current = prev.next;
  let next = null;
  let tail = current;
  for (let i = left; i <= right; i++) {
      next = current.next;
      current.next = prev.next;
      prev.next = current;
      current = next;
  }

  tail.next = current;

  return dummy.next;
};
