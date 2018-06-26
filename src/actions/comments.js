import * as types from "./types";
import * as ReadableAPI from "../utils/api";

export const getCommentsByPostId = id => {
  return dispatch => {
    dispatch(requestCommentsByPostId());
    return ReadableAPI.getComments(id).then(response =>
      dispatch(receiveCommentsByPostId(response))
    );
  };
};

export const createComment = comment => {
  return dispatch => {
    dispatch(requestCreateComment());
    return ReadableAPI.addComment(comment).then(response =>
      dispatch(receiveCreateComment(response))
    );
  };
};

export const editComment = comment => {
  return dispatch => {
    dispatch(requestEditComment());
    return ReadableAPI.editComment(comment).then(response =>
      dispatch(receiveEditComment(response))
    );
  };
};

export const deleteComment = id => {
  return dispatch => {
    dispatch(requestDeleteComment());
    return ReadableAPI.deleteComment(id).then(response =>
      dispatch(receiveDeleteComment(response))
    );
  };
};

export const castVote = payload => {
  return dispatch => {
    dispatch(requestCommentVote());
    return ReadableAPI.voteComment(payload).then(response =>
      dispatch(receiveCommentVote(response))
    );
  };
};

export const receiveCommentsByPostId = comments => {
  return {
    type: types.RECEIVE_COMMENTS_BY_POST_ID,
    comments: comments
  };
};
export const requestCommentsByPostId = () => {
  return {
    type: types.REQUEST_COMMENTS_BY_POST_ID
  };
};
export const receiveCommentVote = comment => {
  return {
    type: types.RECEIVE_COMMENT_VOTE,
    comment: comment
  };
};
export const requestCommentVote = () => {
  return {
    type: types.REQUEST_COMMENT_VOTE
  };
};
export const receiveDeleteComment = comment => {
  return {
    type: types.RECEIVE_DELETE_COMMENT,
    comment: comment
  };
};
export const requestDeleteComment = () => {
  return {
    type: types.REQUEST_DELETE_COMMENT
  };
};

export const receiveEditComment = comment => {
  return {
    type: types.RECEIVE_EDIT_COMMENT,
    comment: comment
  };
};
export const requestEditComment = () => {
  return {
    type: types.REQUEST_EDIT_COMMENT
  };
};
export const receiveCreateComment = comment => {
  return {
    type: types.RECEIVE_CREATE_COMMENT,
    comment: comment
  };
};
export const requestCreateComment = () => {
  return {
    type: types.REQUEST_CREATE_COMMENT
  };
};
export const receiveCommentById = comment => {
  return {
    type: types.RECEIVE_COMMENT_BY_ID,
    comment: comment
  };
};
export const requestCommentById = () => {
  return {
    type: types.REQUEST_COMMENT_BY_ID
  };
};
