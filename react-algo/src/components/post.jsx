import Comments from "./comments";
import {commentsData} from "../data";

const Post = () => {
  return (
    <div className="App">
      i am the main post and i have multiple replies
      <Comments data={commentsData} />
    </div>
  );
}

export default Post;
