import { combineReducers } from "redux";

// import reducers
import posts from "./posts";
import categories from "./categories";

// export single combined reducer to define the store
const readable = combineReducers({
  posts,
  categories
});

export default readable;
