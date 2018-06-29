import React, { Component } from "react";
import { connect } from "react-redux";
import * as postActions from "./../actions/post";
import * as postsActions from "./../actions/posts";
import * as commentsActions from "./../actions/comments";
import Comments from "./Comments";
import PostManager from "./PostManager";
import PostBody from "./PostBody";
import GenericNotFound from "./GenericNotFound";

class PostDetail extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getPostById(id);
    this.props.getCommentsByPostId(id);
  }

  deletePost = () => {
    let id = this.props.match.params.id;
    this.props.deletePost(id);
    this.props.history.push("/");
  };
  votePost = payload => {
    let id = this.props.match.params.id;
    this.props.castVote(payload);
    this.props.getPostById(id);
  };

  render() {
    if (this.props.post.error) return <GenericNotFound />;
    return (
      <div>
        <ul className="row">
          <li className="col-md-12">
            <h4>Post</h4>
          </li>
        </ul>
        {this.props.loading ? "Loading..." : ""}
        <ul className="row">
          <PostBody post={this.props.post} />
          <li className="col-md-3">
            <PostManager
              post={this.props.post}
              onVote={this.votePost}
              deleteItem={this.deletePost}
            />
          </li>
        </ul>
        <div>
          <Comments post={this.props.post} comments={this.props.comments} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ posts, post, loading, comments }) {
  return {
    posts,
    post,
    loading,
    comments
  };
}

export default connect(
  mapStateToProps,
  { postActions, postsActions, commentsActions }
)(PostDetail);
