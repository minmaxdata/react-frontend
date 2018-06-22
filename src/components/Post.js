import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as ReadableAPI from "../utils/api";
import PostManager from "./PostManager";

class Post extends Component {
  refreshPosts = () => {
    this.props.getPosts(this.props.post.category);
  };
  deletePost = id => {
    console.log(' delete post ', this.props)
    ReadableAPI.deletePost(id).then(response => {});
  };
  castVote = payload => {
    ReadableAPI.votePost(payload).then(response => {});
  };

  render() {
    const post = this.props.post;

    return (
      <li className="row">
        <div className="col-md-7">
          <Link to={`${post.category}/${post.id}`}>
            {post.title}
          </Link>
        </div>
        <div className="col-md-1">
          <p className="text-center">{post.voteScore}</p>
        </div>
        <div className="col-md-1">
          <p className="text-center">{post.commentCount}</p>
        </div>

        <div className="col-md-3">
          <PostManager{...this.props} />
        </div>
      </li>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
    category: state.category
  };
}
export default connect(mapStateToProps, null)(Post);
