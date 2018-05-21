export const ADD_POST = 'ADD_POST'
export const DISABLE_POST = 'DISABLE_POST'
export const EDIT_POST = 'EDIT_POST'
export const VOTE_POST = 'VOTE_POST'
export const ADD_COMMENT_COUNT = 'ADD_COMMENT_COUNT'

export function addPost ({
  id,
  timestamp,
  title,
  body,
  author,
  category,
  voteScore,
  deleted,
  commentCount,
}) {
  return {
    type: ADD_POST,
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted,
    commentCount,
  }
}

export function disablePost ({ id }) {
  return {
    type: DISABLE_POST,
    id,
  }
}
