import * as types from "./../actions/types";

function comments(state = [], action) {
  switch (action.type) {
    case types.RECEIVE_COMMENTS_BY_POST_ID:
      return action.comments;
    case types.RECEIVE_CREATE_COMMENT:
      return [...state, action.comment];
    case types.RECEIVE_COMMENT_VOTE:
      return [
        ...state.filter(comment => comment.id !== action.comment.id),
        action.comment
      ];
    case types.RECEIVE_EDIT_COMMENT:
      return [
        ...state.filter(comment => comment.id !== action.comment.id),
        action.comment
      ];

    case types.RECEIVE_DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.comment.id);

    default:
      return state;
  }
}

export default comments;
