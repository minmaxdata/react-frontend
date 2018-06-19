import * as types from "./../actions/types";

function posts(state = [], action) {
  let error;
  console.log('posts reducer ', state, action)
  switch (action.type) {
    case types.REQUEST_ALL_POSTS:
      return [];
    case types.RECEIVE_ALL_POSTS:
      return  action.posts;
    case types.RESET_POSTS:
      return []
    default:
      return state;
  }
}

export default posts;
