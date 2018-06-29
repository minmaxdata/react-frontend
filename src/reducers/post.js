import * as types from "./../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case types.LOAD_POST_BY_ID_SUCCESS:
      return action.post;
    case types.LOAD_POST_BY_ID_REQUEST:
      return {};
    case types.LOAD_POST_BY_ID_FAILURE:
      return {};
    default:
      return state;
  }
}
