import * as types from './types';
import * as ReadableAPI from "../utils/api";

export const getPosts = () => {
  return dispatch =>
    ReadableAPI.getPosts().then(response => dispatch(getPostsAction(response)));
};

export const getPostsAction = posts => {
  return {
    type: types.POSTS_LIST,
    posts: posts
  };
};
