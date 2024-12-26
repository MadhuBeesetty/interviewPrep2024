// 82. Remove Duplicates from Sorted List II

// Given the head of a sorted linked list, delete all nodes that have duplicate numbers,
// leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
// Example 2:


// Input: head = [1,1,1,2,3]
// Output: [2,3]

class ListNode {
  constructor(val,next){
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

let arr = [1,2,3,3,4,4,5];

const head = new ListNode(1);

let current = head
for(var i = 1; i< arr.length; i++){
  current.next = new ListNode(arr[i]);
  current = current.next;
};

const deleteDuplicates = (head) => {
  let dummy = { val: 0, next: head }; // Create a dummy node as an object
  let current = head;

  let duplicate = new Map();
  while (current !== null) {
      duplicate.set(current.val, (duplicate.get(current.val) || 0) + 1);
      current = current.next;
  }

  current = dummy;
  while (current.next !== null) {
      if (duplicate.get(current.next.val) > 1) {
          current.next = current.next.next;
      } else {
          current = current.next;
      }
  }

  return dummy.next;
};

console.log(deleteDuplicates(head));
