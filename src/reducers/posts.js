
export const CATEGORIES_LIST = "CATEGORIES_LIST";
export const POSTS_LIST = "POSTS_LIST";
export const POSTS_LIST_BY_CATEGORY = "POSTS_LIST_BY_CATEGORY";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_REACT: "react",
  SHOW_REDUX: "redux",
  SHOW_UDACITY: "udacity"
};


function posts(state = [], action) {
  switch (action.type) {
    case POSTS_LIST:
      // return all posts[]
      return action.posts;
    case POSTS_LIST_BY_CATEGORY:
      // return all posts[] for a category
      return action.posts;
    default:
      return state;
  }
}

export default posts;
