// 445. Add Two Numbers II

// You are given two non-empty linked lists representing two non-negative integers. The most significant
//  digit comes first and each of their nodes contains a single digit. Add the two numbers and
//  return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:


// Input: l1 = [7,2,4,3], l2 = [5,6,4]
// Output: [7,8,0,7]
// Example 2:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [8,0,7]
// Example 3:

// Input: l1 = [0], l2 = [0]
// Output: [0]

const addTwoNumbers = (l1, l2) => {

  const getNumber = (ll) => {
      let str = "";
      while (ll) {
          str += ll.val;
          ll = ll.next;
      }
      return str;
  };

  let num1 = BigInt(getNumber(l1)); // Use BigInt for large numbers
  let num2 = BigInt(getNumber(l2));

  let total = (num1 + num2).toString();

  let dummy = new ListNode(0);
  let current = dummy;

  for (let char of total) {
      current.next = new ListNode(Number(char));
      current = current.next;
  }

  return dummy.next;
};
