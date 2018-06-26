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
