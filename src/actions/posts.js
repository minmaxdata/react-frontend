import * as types from './types';
import * as ReadableAPI from "../utils/api";

export const getAllPosts = () => {
  return dispatch => {
    dispatch(requestAllPosts())
    return ReadableAPI.getPosts().then(response => dispatch(receiveAllPosts(response)));
  }
};

export const receiveAllPosts = posts => {
  return {
    type: types.RECEIVE_ALL_POSTS,
    posts: posts
  };
};
export const requestAllPosts= () => {
  return {
    type: types.REQUEST_ALL_POSTS
  }
}
