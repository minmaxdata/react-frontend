import * as types from "./../actions/types";

function posts(state = [], action) {
  let error;
  switch (action.type) {

    case types.POSTS_LIST:
      return { ...state, postsList: {posts:[], error: null, loading: true} };
    case types.POSTS_LIST_SUCCESS:
      return { ...state, postsList: {posts: action.payload, error:null, loading: false} };
    case types.POSTS_LIST_FAILURE:
      error = action.payload || {message: action.payload.message};
      return { ...state, postsList: {posts: [], error: error, loading: false} };
    case types.RESET_POSTS_LIST:
      return { ...state, postsList: {posts: [], error:null, loading: false} };


    default:
      return state;
  }
}

export default posts;
