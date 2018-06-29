import * as types from "./types";
import * as ReadableAPI from "../utils/api";

export const getAllPosts = () => {
  return dispatch => {
    dispatch(loadPostsRequest());
    return ReadableAPI.getPosts().then(response =>
      dispatch(loadPostsSuccess(response))
    );
  };
};
export const getPostsByCategory = category => {
  return dispatch => {
    dispatch(loadtPostsByCategoryRequest());
    return ReadableAPI.getPostsByCategory(category).then(response =>
      dispatch(loadPostsByCategorySuccess(response))
    );
  };
};
export const createPost = post => {
  return dispatch => {
    dispatch(createPostRequest());
    return ReadableAPI.addPost(post).then(response =>
      dispatch(createPostSuccess(response))
    );
  };
};

export const editPost = post => {
  return dispatch => {
    dispatch(editPostRequest());
    return ReadableAPI.editPost(post).then(response =>
      dispatch(editPostSuccess(response))
    );
  };
};

export const deletePost = id => {
  return dispatch => {
    dispatch(deletePostRequest());
    return ReadableAPI.deletePost(id).then(response =>
      dispatch(deletePostSuccess(response))
    );
  };
};

export const castVote = payload => {
  return dispatch => {
    dispatch(postVoteRequest());
    return ReadableAPI.votePost(payload).then(response =>
      dispatch(postVoteSuccess(response))
    );
  };
};
export const postVoteSuccess = post => {
  return {
    type: types.POST_VOTE_SUCCESS,
    post: post
  };
};
export const postVoteRequest = () => {
  return {
    type: types.POST_VOTE_REQUEST
  };
};
export const deletePostSuccess = post => {
  return {
    type: types.DELETE_POST_SUCCESS,
    post: post
  };
};
export const deletePostRequest = () => {
  return {
    type: types.DELETE_POST_REQUEST
  };
};

export const editPostSuccess = post => {
  return {
    type: types.EDIT_POST_SUCCESS,
    post: post
  };
};
export const editPostRequest = () => {
  return {
    type: types.EDIT_POST_REQUEST
  };
};
export const createPostSuccess = post => {
  return {
    type: types.CREATE_POST_SUCCESS,
    post: post
  };
};
export const createPostRequest = () => {
  return {
    type: types.CREATE_POST_REQUEST
  };
};
export const loadPostById = post => {
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

export const loadPostsSuccess = posts => {
  return {
    type: types.LOAD_POSTS_SUCCESS,
    posts: posts
  };
};
export const loadPostsRequest = () => {
  return {
    type: types.LOAD_POSTS_REQUEST
  };
};

export const loadPostsByCategorySuccess = posts => {
  return {
    type: types.LOAD_POSTS_BY_CATEGORY_SUCCESS,
    posts: posts
  };
};
export const loadtPostsByCategoryRequest = () => {
  return {
    type: types.LOAD_POSTS_BY_CATEGORY_REQUEST
  };
};
