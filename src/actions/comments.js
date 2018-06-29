import * as types from "./types";
import * as ReadableAPI from "../utils/api";

export const getCommentsByPostId = id => {
  return dispatch => {
    dispatch(commentsByPostIdRequest());
    return ReadableAPI.getComments(id).then(response =>
      dispatch(commentsByPostIdSuccess(response))
    );
  };
};

export const createComment = comment => {
  return dispatch => {
    dispatch(createCommentRequest());
    return ReadableAPI.addComment(comment).then(response =>
      dispatch(createCommentSuccess(response))
    );
  };
};

export const editComment = comment => {
  return dispatch => {
    dispatch(editCommentRequest());
    return ReadableAPI.editComment(comment).then(response =>
      dispatch(editCommentSuccess(response))
    );
  };
};

export const deleteComment = id => {
  return dispatch => {
    dispatch(deleteCommentRequest());
    return ReadableAPI.deleteComment(id).then(response =>
      dispatch(deleteCommentSuccess(response))
    );
  };
};

export const castVote = payload => {
  return dispatch => {
    dispatch(commentVoteRequest());
    return ReadableAPI.voteComment(payload).then(response =>
      dispatch(commentVoteSuccess(response))
    );
  };
};

export const commentsByPostIdSuccess = comments => {
  return {
    type: types.LOAD_COMMENTS_BY_POST_ID_SUCCESS,
    comments: comments
  };
};
export const commentsByPostIdRequest = () => {
  return {
    type: types.LOAD_COMMENTS_BY_POST_ID_REQUEST
  };
};
export const commentVoteSuccess = comment => {
  return {
    type: types.COMMENT_VOTE_SUCCESS,
    comment: comment
  };
};
export const commentVoteRequest = () => {
  return {
    type: types.COMMENT_VOTE_REQUEST
  };
};
export const deleteCommentSuccess = comment => {
  return {
    type: types.DELETE_COMMENT_SUCCESS,
    comment: comment
  };
};
export const deleteCommentRequest = () => {
  return {
    type: types.DELETE_COMMENT_REQUEST
  };
};

export const editCommentSuccess = comment => {
  return {
    type: types.EDIT_COMMENT_SUCCESS,
    comment: comment
  };
};
export const editCommentRequest = () => {
  return {
    type: types.EDIT_COMMENT_REQUEST
  };
};
export const createCommentSuccess = comment => {
  return {
    type: types.CREATE_COMMENT_SUCCESS,
    comment: comment
  };
};
export const createCommentRequest = () => {
  return {
    type: types.CREATE_COMMENT_REQUEST
  };
};
export const commentByIdSuccess = comment => {
  return {
    type: types.LOAD_COMMENT_BY_ID_SUCCESS,
    comment: comment
  };
};
export const commentByIdRequest = () => {
  return {
    type: types.LOAD_COMMENT_BY_ID_REQUEST
  };
};
