import * as types from "./../actions/types";

function post(state = [], action) {
  switch (action.type) {
    case types.LOAD_POST_BY_ID_SUCCESS:
      return action.post;
    default:
      return state;
  }
}

export default post;
