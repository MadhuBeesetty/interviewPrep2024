// 1669. Merge In Between Linked Lists

// You are given two linked lists: list1 and list2 of sizes n and m respectively.

// Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

// The blue edges and nodes in the following figure indicate the result:

// Build the result list and return its head.

// Example 1:


// Input: list1 = [10,1,13,6,9,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
// Output: [10,1,13,1000000,1000001,1000002,5]
// Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place.
//  The blue edges and nodes in the above figure indicate the result.
// Example 2:


// Input: list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
// Output: [0,1,1000000,1000001,1000002,1000003,1000004,6]
// Explanation: The blue edges and nodes in the above figure indicate the result.

const mergeInBetween = (list1, a, b, list2) => {
  let prevA = null;
  let afterB = null;
  let current = list1;
  let index = 0;

  while (current !== null) {
      if (index === a - 1) {
          prevA = current;
      }
      if (index === b) {
          afterB = current.next;
          break;
      }
      current = current.next;
      index++;
  }

  prevA.next = list2;

  let tail = list2;
  while (tail.next !== null) {
      tail = tail.next;
  }

  tail.next = afterB;

  return list1;
};

const list1 = { val: 0, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } } };
const list2 = { val: 100, next: { val: 101, next: null } };
const a = 2;
const b = 4;

console.log(mergeInBetween(list1, a, b, list2));
