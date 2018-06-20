import { combineReducers } from "redux";

// import reducers
import posts from "./posts";
import categories from "./categories";
import post from './post'

// export single combined reducer to define the store
const readable = combineReducers({
  posts,
  categories,
  post
});

export default readable;
