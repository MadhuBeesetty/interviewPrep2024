import Comments from "./comments";
import AddComment from './AddComment';
import {CommentsData} from "../api";
import { useState, useEffect } from "react";

const Post = () => {

const [comments, updateComments] = useState([])

useEffect(() => {
  const data = CommentsData();
  data.then((value) => updateComments([...value]));
}, [])

  return (
    <div>
      i am the main post and i have multiple replies
      <AddComment />
      <Comments commentsData={comments} />
    </div>
  );
}

export default Post;
