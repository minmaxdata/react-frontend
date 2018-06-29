import React from "react";

const PostBody = props => {
  return (
    <li className="col-md-9">
      <div>Title: {props.post.title}</div>
      <div>Author: {props.post.author}</div>
      <div>Category: {props.post.category}</div>
      <div>Body: {props.post.body}</div>
      <div>VoteScore: {props.post.voteScore}</div>
      <div>Comment Count: {props.post.commentCount}</div>
    </li>
  );
};

export default PostBody;
