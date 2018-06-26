import * as types from "./../actions/types";

function post(state = [], action) {
  switch (action.type) {
    case types.RECEIVE_POST_BY_ID:
      return action.post;
    case types.RECEIVE_DELETE_POST:
      return {};
    case types.RECEIVE_POST_VOTE:
      return action.post;

    default:
      return state;
  }
}

export default post;
