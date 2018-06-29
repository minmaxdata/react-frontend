import React from "react";

const PostBody = post => {
  return (
    <li className="col-md-9">
      <div>Title: {post}</div>
      <div>Author: {post}</div>
      <div>Category: {post}</div>
      <div>Body: {post}</div>
      <div>VoteScore: {post}</div>
      <div>Comment Count: {post}</div>
    </li>
  );
};

export default PostBody;
