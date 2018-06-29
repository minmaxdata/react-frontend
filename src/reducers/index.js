import { combineReducers } from "redux";
import * as types from "./../actions/types";

// import reducers
import posts from "./posts";
import post from "./post";
import categories from "./categories";
import category from "./category";
import comments from "./comments";
import loading from "./loading";

const errorMessage = (state = null, action) => {
  const { type, error } = action;

  if (type === types.ERROR_STATE) {
    return null;
  } else if (error) {
    return error;
  }

  return state;
};

// export single combined reducer to define the store
const readable = combineReducers({
  posts,
  post,
  categories,
  category,
  comments,
  loading,
  errorMessage
});

export default readable;
