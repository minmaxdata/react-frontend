import * as types from "./types";
import * as ReadableAPI from "../utils/api";

export const getPostById = id => {
  return dispatch => {
    dispatch(requestPostById());
    return ReadableAPI.getPostById(id).then(response =>
      dispatch(receivePostById(response))
    );
  };
};
export const receivePostById = post => {
  return {
    type: types.LOAD_POST_BY_ID_SUCCESS,
    post: post
  };
};
export const requestPostById = () => {
  return {
    type: types.LOAD_POST_BY_ID_REQUEST
  };
};
