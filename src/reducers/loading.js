import * as types from "./../actions/types";

const loading = (state = false, action) => {
  switch (action.type) {
    case types.LOAD_POSTS_REQUEST:
      return true;
    case types.LOAD_POSTS_SUCCESS:
      return false;
    case types.LOAD_POSTS_FAILURE:
      return false;
    case types.LOAD_POST_BY_ID_REQUEST:
      return true;
    case types.LOAD_POST_BY_ID_FAILURE:
      return false;
    case types.LOAD_POST_BY_ID_SUCCESS:
      return false;
    default:
      return state;
  }
};

export default loading;
