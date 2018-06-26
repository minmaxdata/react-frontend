import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostById, castVote } from "./../actions/post";
import { deletePost} from "./../actions/posts";
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
    this.props.dispatchCastVote(payload);
  };

  render() {
    if (Object.keys(this.props.post).length === 0 && this.props.post.constructor === Object ) {
      return <GenericNotFound />;
    } else {
      return (
        <div>
          <ul className="row">
            <li className="col-md-12">
              <h4>Post</h4>
            </li>
          </ul>

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
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    post: state.post,
    comments: state.comments
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
