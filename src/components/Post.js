import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost, castVote } from "./../actions/posts";
import PostManager from "./PostManager";

const Post = props => {
  const deletePost = () => {
    let id = props.post.id;
    props.dispatchDeletePost(id);
  };
  const votePost = payload => {
    props.dispatchCastVote(payload);
  };

  return (
    <li className="row">
      <div className="col-md-7">
        <Link to={`${props.post.category}/${props.post.id}`}>
          {props.post.title}
        </Link>
        <p className="text-left">{props.post.author}</p>
      </div>
      <div className="col-md-1">
        <p className="text-center">{props.post.voteScore}</p>
      </div>
      <div className="col-md-1">
        <p className="text-center">{props.post.commentCount}</p>
      </div>

      <div className="col-md-3">
        <PostManager
          post={props.post}
          onVote={votePost}
          deleteItem={deletePost}
        />
      </div>
    </li>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    dispatchDeletePost: id => dispatch(deletePost(id)),
    dispatchCastVote: payload => dispatch(castVote(payload))
  };
};
function mapStateToProps({ posts }, { loading }) {
  return {
    posts,
    loading
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
