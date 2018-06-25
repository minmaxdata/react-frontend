import { combineReducers } from "redux";

// import reducers
import posts from "./posts";
import post from "./post";
import categories from "./categories";
import category from './category'
import comments from './comments'

// export single combined reducer to define the store
const readable = combineReducers({
  posts,
  post,
  categories,
  category,
  comments
});

export default readable;
