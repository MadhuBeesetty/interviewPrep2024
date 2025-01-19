// 23. Merge k Sorted Lists

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:

// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6
// Example 2:

// Input: lists = []
// Output: []
// Example 3:

// Input: lists = [[]]
// Output: []

function mergeKLists(lists) {
  const elements = []; // Global array to store all elements

  // Helper function to extract all elements from a linked list
  const extractElements = (node) => {
      while (node) {
          elements.push(node.val);
          node = node.next;
      }
  };

  // Extract elements from all linked lists
  for (const list of lists) {
      if (list) extractElements(list);
  }

  // Sort the array
  elements.sort((a, b) => a - b);

  // Create a new linked list from the sorted array
  const fakeNode = new ListNode(0);
  let current = fakeNode;

  for (const val of elements) {
      current.next = new ListNode(val);
      current = current.next;
  }

  return fakeNode.next; // Return the merged linked list
}
