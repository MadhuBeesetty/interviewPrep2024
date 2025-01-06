

// const singleComment = {
//   "id": "reply1",
//   "content": "This is a reply to the comment.",
//   "author": "User3",
//   "timestamp": "2025-01-04T12:00:00Z",
// }

const SingleCommnet = (singleComment) => {

console.log(singleComment, "this is single comment");

  const {eachCommentData} = singleComment;

  return (
    <div id={eachCommentData.id}>
      <h3>{eachCommentData.author}</h3>
      <p>{eachCommentData.timestamp}</p>
      <p>{eachCommentData.content}</p>
    </div>
  );
}

export default SingleCommnet;
