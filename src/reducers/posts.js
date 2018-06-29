import * as types from "./../actions/types";

function posts(state = [], action) {
  switch (action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return action.posts;
    case types.LOAD_POSTS_BY_CATEGORY_SUCCESS:
      return action.posts;
    case types.CREATE_POST_SUCCESS:
      return [...state, action.post];
    case types.POST_VOTE_SUCCESS:
      return state.map(post => {
        if (post.id !== action.post.id) {
          return post;
        }
        return {
          ...post,
          ...action.post
        };
      });
    case types.DELETE_POST_SUCCESS:
      return state.filter(post => post.id !== action.post.id);

    default:
      return state;
  }
}

export default posts;
