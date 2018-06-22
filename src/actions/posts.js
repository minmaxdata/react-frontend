import * as types from "./types";
import * as ReadableAPI from "../utils/api";

export const getAllPosts = () => {
  return dispatch => {
    dispatch(requestAllPosts());
    return ReadableAPI.getPosts().then(response =>
      dispatch(receiveAllPosts(response))
    );
  };
};
export const getPostsByCategory = category => {
  return dispatch => {
    dispatch(requestPostsByCategory());
    return ReadableAPI.getPostsByCategory(category).then(response =>
      dispatch(receivePostsByCategory(response))
    );
  };
};

export const getPostById = id => {
  return dispatch => {
    dispatch(requestPostById());
    return ReadableAPI.getPostById(id).then(response =>
      dispatch(receivePostById(response))
    );
  };
};
export const createPost = post => {
  return dispatch => {
    dispatch(requestCreatePost());
    return ReadableAPI.addPost(post).then(response =>
      dispatch(receiveCreatePost(response))
    );
  };
};

export const editPost = post => {
  return dispatch => {
    dispatch(requestEditPost());
    return ReadableAPI.editPost(post).then(response =>
      dispatch(receiveEditPost(response))
    );
  };
};

export const deleteItem = id => {
  return dispatch => {
    dispatch(requestDeleteItem());
    return ReadableAPI.deletePost(id).then(response =>
      dispatch(receiveDeleteItem(response))
    );
  };
};
export const receiveDeleteItem = post => {
  return {
    type: types.RECEIVE_DELETE_ITEM,
    post: post
  };
};
export const requestDeleteItem = () => {
  return {
    type: types.REQUEST_DELETE_ITEM
  };
};

export const receiveEditPost = post => {
  return {
    type: types.RECEIVE_EDIT_POST,
    post: post
  };
};
export const requestEditPost = () => {
  return {
    type: types.REQUEST_EDIT_POST
  };
};
export const receiveCreatePost = post => {
  return {
    type: types.RECEIVE_CREATE_POST,
    post: post
  };
};
export const requestCreatePost = () => {
  return {
    type: types.REQUEST_CREATE_POST
  };
};

export const receivePostById = post => {
  return {
    type: types.RECEIVE_POST_BY_ID,
    post: post
  };
};
export const requestPostById = () => {
  return {
    type: types.REQUEST_POST_BY_ID
  };
};

export const receiveAllPosts = posts => {
  return {
    type: types.RECEIVE_ALL_POSTS,
    posts: posts
  };
};
export const requestAllPosts = () => {
  return {
    type: types.REQUEST_ALL_POSTS
  };
};

export const receivePostsByCategory = posts => {
  return {
    type: types.RECEIVE_POSTS_BY_CATEGORY,
    posts: posts
  };
};
export const requestPostsByCategory = () => {
  return {
    type: types.REQUEST_POSTS_BY_CATEGORY
  };
};
export const setCategory= category => {
  return {
    type: types.SET_CATEGORY,
    category
  }
}
