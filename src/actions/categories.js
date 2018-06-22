import * as types from './types';
import * as ReadableAPI from "../utils/api";

export const getCategories = () => {
  return dispatch => {
    dispatch(requestCategories())
    return ReadableAPI.getCategories().then(response => {
      dispatch(receiveCategories(response))});
  }
};

export const receiveCategories = categories => {
  return {
    type: types.RECEIVE_CATEGORIES,
    categories: categories
  };
};
export const requestCategories= () => {
  return {
    type: types.REQUEST_CATEGORIES
  }
}
