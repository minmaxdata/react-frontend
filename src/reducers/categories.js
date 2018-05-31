
export const CATEGORIES_LIST = "CATEGORIES_LIST";

function categories(state = [], action) {
  switch (action.type) {
    case CATEGORIES_LIST:
      return action.categories.categories;
    default:
      return state;
  }
}

export default categories;
