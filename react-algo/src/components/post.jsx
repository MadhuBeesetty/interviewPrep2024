import Comments from "./comments";
import {commentsData} from "../data";

const Post = () => {
  return (
    <div>
      i am the main post and i have multiple replies
      <Comments commentsData={commentsData} />
    </div>
  );
}

export default Post;
