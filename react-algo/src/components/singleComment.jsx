

// const singleComment = {
//   "id": "reply1",
//   "content": "This is a reply to the comment.",
//   "author": "User3",
//   "timestamp": "2025-01-04T12:00:00Z",
// }

const SingleCommnet = (singleComment) => {

console.log(singleComment, "this is single comment");

  return (
    <div id={singleComment.eachCommentData.id}>
      <h3>{singleComment.eachCommentData.author}</h3>
      <p>{singleComment.eachCommentData.timestamp}</p>
      <p>{singleComment.eachCommentData.content}</p>
    </div>
  );
}

export default SingleCommnet;
