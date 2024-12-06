// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Definition for singly-linked list.
class ListNode {
  constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
  }
}

const mergeTwoLists = (l1, l2) => {
  // Create a dummy node to act as the head of the new list.
  let dummy = new ListNode(-1);
  let current = dummy;
  while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
          current.next = l1;
          l1 = l1.next;
      } else {
          current.next = l2;
          l2 = l2.next;
      };
      current = current.next;
  };
  if (l1 !== null) {
      current.next = l1;
  } else if (l2 !== null) {
      current.next = l2;
  }
  return dummy.next;
};

// Example usage:
// Assume l1 = [1, 2, 4] and l2 = [1, 3, 4]
// You can create linked lists like this:
const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
// Merge the lists
const mergedList = mergeTwoLists(l1, l2);
console.log(mergedList);
// Print merged list
let currentNode = mergedList;
let result = [];
while (currentNode !== null) {
  result.push(currentNode.val);
  currentNode = currentNode.next;
}
console.log(result);
