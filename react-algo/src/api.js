import { commentsData } from "./data";

export const CommentsData = () => {
  return new Promise((resolve) => resolve(commentsData));
}
