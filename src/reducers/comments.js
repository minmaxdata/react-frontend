import * as types from "./../actions/types";

function comments(state = [], action) {
  switch (action.type) {
    case types.LOAD_COMMENTS_BY_POST_ID_SUCCESS:
      return action.comments;
    case types.CREATE_COMMENT_SUCCESS:
      return [...state, action.comment];
    case types.COMMENT_VOTE_SUCCESS:
      return [
        ...state.filter(comment => comment.id !== action.comment.id),
        action.comment
      ];
    case types.EDIT_COMMENT_SUCCESS:
      return [
        ...state.filter(comment => comment.id !== action.comment.id),
        action.comment
      ];

    case types.DELETE_COMMENT_SUCCESS:
      return state.filter(comment => comment.id !== action.comment.id);

    default:
      return state;
  }
}

export default comments;
