import React from "react";
import { Link } from "react-router-dom";
import PostManager from "./PostManager";

const Post = props => {

    return (
      <li className="row">
        <div className="col-md-7">
          <Link to={`${props.post.category}/${props.post.id}`}>
            {props.post.title}
          </Link>
        </div>
        <div className="col-md-1">
          <p className="text-center">{props.post.voteScore}</p>
        </div>
        <div className="col-md-1">
          <p className="text-center">{props.post.commentCount}</p>
        </div>

        <div className="col-md-3">
          <PostManager post={props.post} />
        </div>
      </li>
    );
}

export default Post;
