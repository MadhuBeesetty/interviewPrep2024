
import SingleCommnet from "./singleComment";



const Comments = (commentsData) => {
  console.log(commentsData, "comments data");
  return (
    <div className="App">
      {commentsData.data.map((eachCommentData) => (
        <SingleCommnet key={eachCommentData.id} eachCommentData={eachCommentData}/>
      ))}
    </div>
  );
}

export default Comments;
