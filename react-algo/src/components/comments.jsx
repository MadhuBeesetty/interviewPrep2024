import SingleCommnet from "./singleComment";
import AddComment from "./AddComment";

const Comments = (data) => {
  const {commentsData} = data;
  console.log(commentsData, "comments data");
  return (
    <div className="App">
      {commentsData.map((eachCommentData) => (
        eachCommentData.replies ? (
          <>
        <Comments commentsData={eachCommentData.replies}/>
        <AddComment />
        </>
        ) :
        (<SingleCommnet key={eachCommentData.id} eachCommentData={eachCommentData}/>)
      ))}
    </div>
  );
}

export default Comments;
