import { useState, useEffect } from "react";

const AddComment = () => {

const [comments, updateComments] = useState("")

console.log(comments, "this is use state");
const updateInput = (e) => {
  updateComments(e.target.value);
}

  return (
    <>
    <input type="text" placeholder="enter new comment" onChange={(e) => updateInput(e)}/>
    <input type="button" value="post"/>
    </>
  );
}

export default AddComment;
