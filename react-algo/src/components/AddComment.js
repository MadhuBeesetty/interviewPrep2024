import { useState, useCallback } from "react";

const AddComment = () => {

const [comments, updateComments] = useState("")

console.log(comments, "this is use state");
const updateInput = useCallback ((e) => {
  console.log("i am use callback");
  updateComments(e.target.value);
}, []);

  return (
    <>
    <input type="text" placeholder="enter new comment" onChange={(e) => updateInput(e)}/>
    <input type="button" value="post"/>
    </>
  );
}

export default AddComment;
