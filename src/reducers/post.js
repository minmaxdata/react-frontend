import * as types from "./../actions/types";

function post(state = [], action) {
  switch (action.type) {
    case types.REQUEST_POST_BY_ID:
      return [];
    case types.RECEIVE_POST_BY_ID:
      return action.post;

    default:
      return state;
  }
}

export default post;
