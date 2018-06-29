import * as types from "./../actions/types";

function categories(state = [], action) {
  switch (action.type) {
    case types.LOAD_CATEGORIES_REQUEST:
      return [];
    case types.LOAD_CATEGORIES_SUCCESS:
      return action.categories.categories;
    default:
      return state;
  }
}

export default categories;
