import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost, castVote } from "./../actions/posts";
import PostManager from "./PostManager";

const Post = props => {
  const deletePost = () => {
    console.log('post props ', props)
    let id = props.post.id;
    props.dispatchDeletePost(id);
  };
  const votePost = payload => {
    console.log('post props ', payload)
    props.dispatchCastVote(payload);
  };

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
        <PostManager
          post={props.post}
          onVote={votePost}
          deleteItem={deletePost}
        />
      </div>
    </li>
  );
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchDeletePost: id => dispatch(deletePost(id)),
    dispatchCastVote: payload => dispatch(castVote(payload))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
