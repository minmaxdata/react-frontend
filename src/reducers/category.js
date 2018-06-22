import * as types from "./../actions/types";

function category(state = [], action) {
  switch (action.type) {
    case types.SET_CATEGORY:
      return {set: action.category};
    default:
      return state;
  }
}

export default category;
