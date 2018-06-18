import React from "react";
import { Link } from "react-router-dom";
import * as ReadableAPI from "../utils/api";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
import Vote from "./Vote";

const Post = ({ post}) => {
  const refreshPost = category => {
    console.log("refresh posts ", post);
    ReadableAPI.getPostById(post.id).then(response => {
      console.log("refresh post ", response);
    });
  };
  const deletePost = id => {
    ReadableAPI.deletePost(id).then(response => {
        console.log("deletePost post ", response);
    });
  };
  const castVote = payload => {
    ReadableAPI.votePost(payload).then(response => {
        console.log("vote post ", response);
    });
  };

  return (
    <li className="row">
      <div className="col-md-7">
        <Link to={`${post.category}/${post.id}`}>{post.title}</Link>
      </div>
      <div className="col-md-1">
        <p className="text-center">{post.voteScore}</p>
      </div>
      <div className="col-md-1">
        <p className="text-center">{post.commentCount}</p>
      </div>
      <div className="col-md-3">
        <p className="text-center">
          <Vote itemId={post.id} castVote={castVote} onVote={refreshPost} />
          <Link
            className="btn"
            role="button"
            to={`/${post.category}/${post.id}/edit`}
          >
            <EditItem />
          </Link>
          <DeleteItem
            deleteItem={deletePost}
            itemId={post.id}
            onDelete={refreshPost}
          />
        </p>
      </div>
    </li>
  );
};
export default Post;
