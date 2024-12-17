// given an array of comments that can be a comment at a top level
// or reply to a top level comment or any level,
// create a nested data which follows the level hireachy

const comments = [
  { id: 1, message: "This is the first comment", parentId: null },
  { id: 2, message: "This is a reply to the first comment", parentId: 1 },
  { id: 3, message: "Another reply to the first comment", parentId: 1 },
  { id: 4, message: "This is a reply to the second comment", parentId: 2 },
  { id: 5, message: "This is another top-level comment", parentId: null },
  { id: 6, message: "Reply to the second second-level comment", parentId: 2 },
  { id: 7, message: "Reply to the first top-level comment", parentId: 1 },
  { id: 8, message: "Reply to the five comment", parentId: 5 }
];
