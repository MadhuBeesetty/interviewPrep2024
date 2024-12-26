// 19. Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and
// return its head.

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

class ListNode {
  constructor(val,next){
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

let arr = [1,2,3,4,5];

const head = new ListNode(1);

let current = head
for(var i = 1; i< arr.length; i++){
  current.next = new ListNode(arr[i]);
  current = current.next;
};

console.log(head, "this is the list");

const removeNthFromEnd = (head, n) => {
  let current = head;
  let tracker1 = 0;
  let current2 = head;
  let tracker2 = 0;
  let previous2 = null;

  while (current !== null) {
      current = current.next;
      tracker1++;
  }

  let pointOfRemoval = tracker1 - n;

  while (current2 !== null) {
      if (tracker2 === pointOfRemoval) {
          if (previous2 === null) {
              return head.next;
          }
          previous2.next = current2.next;
          return head;
      }
      previous2 = current2;
      current2 = current2.next;
      tracker2++;
  }
};

console.log(removeNthFromEnd(head, 4));
