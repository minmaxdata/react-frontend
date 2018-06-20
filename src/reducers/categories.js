import * as types from "./../actions/types";

function categories(state = [], action) {
  console.log("categories reducer ", state, action);
  switch (action.type) {
    case types.REQUEST_CATEGORIES:
      return [];
    case types.RECEIVE_CATEGORIES:
      return action.categories.categories;
    default:
      return state;
  }
}

export default categories;
