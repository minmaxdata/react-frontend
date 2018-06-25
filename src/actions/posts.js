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

export const deletePost = id => {
  return dispatch => {
    dispatch(requestDeletePost());
    return ReadableAPI.deletePost(id).then(response =>
      dispatch(receiveDeletePost(response))
    );
  };
};

export const castVote = payload => {
  return dispatch => {
    dispatch(requestPostVote());
    return ReadableAPI.votePost(payload).then(response =>
      dispatch(receivePostVote(response))
    );
  };
};
export const receivePostVote = post => {
  return {
    type: types.RECEIVE_POST_VOTE,
    post: post
  };
};
export const requestPostVote = () => {
  return {
    type: types.REQUEST_POST_VOTE
  };
};
export const receiveDeletePost = post => {
  return {
    type: types.RECEIVE_DELETE_POST,
    post: post
  };
};
export const requestDeletePost = () => {
  return {
    type: types.REQUEST_DELETE_POST
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
