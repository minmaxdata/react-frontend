export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';


export const requestPosts = category => ({
  type: REQUEST_POSTS,
  category
});

export const receivePosts = (category, json) => ({
  type: RECEIVE_POSTS,
  category,
  posts: json,
  receivedAt: Date.now()
});
