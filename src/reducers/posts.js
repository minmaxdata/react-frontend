import * as types from "./../actions/types";

function posts(state = [], action) {
  console.log("posts reducer ", state, action);
  switch (action.type) {
    case types.RECEIVE_ALL_POSTS:
      return action.posts;
    case types.RECEIVE_POSTS_BY_CATEGORY:
      return action.posts;
    case types.RECEIVE_CREATE_POST:
      return [...state, action.post];
    case types.RECEIVE_POST_VOTE:
      return state.map(post => {
        if (post.id !== action.post.id) {
          return post;
        }
        return {
          ...post,
          ...action.post
        };
      });
    case types.RECEIVE_DELETE_POST:
      return state.filter(post => post.id !== action.post.id);

    default:
      return state;
  }
}

export default posts;
