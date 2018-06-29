import * as types from "./types";
import * as ReadableAPI from "../utils/api";

export const getCategories = () => {
  return dispatch => {
    dispatch(loadCategoriesRequest());
    return ReadableAPI.getCategories().then(response => {
      dispatch(loadCategoriesSuccess(response));
    });
  };
};

export const loadCategoriesSuccess = categories => {
  return {
    type: types.LOAD_CATEGORIES_SUCCESS,
    categories: categories
  };
};
export const loadCategoriesRequest = () => {
  return {
    type: types.LOAD_CATEGORIES_REQUEST
  };
};
