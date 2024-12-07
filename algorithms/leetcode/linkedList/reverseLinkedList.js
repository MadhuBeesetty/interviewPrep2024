// Given the head of a singly linked list, reverse the list, and return the reversed list.

class ListNode {
  constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
  }
}

const reverseList = (head) => {
  let current = head;
  let previous = null;

  while(current !== null){
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};

// Example Usage:
// Original list: 1 -> 2 -> 3 -> 4 -> 5 -> null
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const reversedHead = reverseList(head);
console.log(reversedHead);
