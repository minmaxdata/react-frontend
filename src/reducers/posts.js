import * as types from "./../actions/types";

function posts(state = [], action) {
  console.log("posts reducer ", state, action);
  switch (action.type) {
    case types.REQUEST_ALL_POSTS:
      return [];
    case types.RECEIVE_ALL_POSTS:
      return action.posts;
    case types.REQUEST_POSTS_BY_CATEGORY:
      return [];
    case types.RECEIVE_POSTS_BY_CATEGORY:
      return action.posts;
    case types.REQUEST_CREATE_POST:
      return [];
    case types.RECEIVE_CREATE_POST:
      return [...state, action.post];
    case types.REQUEST_DELETE_ITEM:
      return [];
    case types.RECEIVE_DELETE_ITEM:
      return state.filter(post => post.id !== action.post.id);

    default:
      return state;
  }
}

export default posts;
