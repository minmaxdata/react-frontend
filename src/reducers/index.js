import { combineReducers } from "redux";

// import reducers
import posts from "./posts";
import post from "./post";
import categories from "./categories";
import category from './category'

// export single combined reducer to define the store
const readable = combineReducers({
  posts,
  post,
  categories,
  category
});

export default readable;
