import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostById } from "./../actions/post";
import { castVote, deletePost } from "./../actions/posts";
import { getCommentsByPostId } from "./../actions/comments";
import Comments from "./Comments";
import PostManager from "./PostManager";
import PostBody from "./PostBody";
import GenericNotFound from "./GenericNotFound";

class PostDetail extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.dispatchGetPostById(id);
    this.props.dispatchGetCommentsByPostId(id);
  }

  deletePost = () => {
    let id = this.props.match.params.id;
    this.props.dispatchDeletePost(id);
    this.props.history.push("/");
  };
  votePost = payload => {
    let id = this.props.match.params.id;
    this.props.dispatchCastVote(payload);
    this.props.dispatchGetPostById(id);
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

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetPostById: id => {
      dispatch(getPostById(id));
    },
    dispatchGetCommentsByPostId: id => dispatch(getCommentsByPostId(id)),
    dispatchDeletePost: id => dispatch(deletePost(id)),
    dispatchCastVote: payload => dispatch(castVote(payload))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
