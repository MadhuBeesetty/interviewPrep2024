// 143. Reorder List

// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.

// Example 1:

// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:

// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

const reorderList = (head) => {
  if (!head || !head.next || !head.next.next) return;

  let slow = head, fast = head;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }

  let prev = null, current = slow.next;
  slow.next = null;
  while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
  }

  let first = head, second = prev;
  while (second) {
      let temp1 = first.next, temp2 = second.next;
      first.next = second;
      second.next = temp1;
      first = temp1;
      second = temp2;
  }
};
