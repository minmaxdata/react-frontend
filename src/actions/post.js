import * as types from "./types";
import * as ReadableAPI from "../utils/api";

export const getPostById = id => {
  return dispatch => {
    dispatch(loadPostByIdRequest());
    return ReadableAPI.getPostById(id).then(response => {
      if (response.error) {
        dispatch(loadPostByIdFailure(response));
      } else {
        dispatch(loadPostByIdSuccess(response));
      }
    });
  };
};
export const loadPostByIdSuccess = post => {
  return {
    type: types.LOAD_POST_BY_ID_SUCCESS,
    post: post
  };
};
export const loadPostByIdRequest = () => {
  return {
    type: types.LOAD_POST_BY_ID_REQUEST
  };
};
export const loadPostByIdFailure = error => {
  return {
    type: types.LOAD_POST_BY_ID_FAILURE,
    error: error
  };
};
