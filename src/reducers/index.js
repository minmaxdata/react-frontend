import { combineReducers } from "redux";

// import reducers
import posts from "./posts";


// export single combined reducer to define the store
const readable = combineReducers({
  posts
});

export default readable;
