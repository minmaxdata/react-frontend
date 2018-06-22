import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostById } from "./../actions/post";
import Comments from "./Comments";
import PostManager from "./PostManager";
import PostBody from "./PostBody";

class PostDetail extends Component {
  componentDidMount() {
    //const id = this.props.post.id;

    let id = this.props.match.params.id;
    this.props.dispatchGetPostById(id);
      console.log("post detail props ", this.props);
  }

  render() {
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
            <PostManager post={this.props.post} />
          </li>
        </ul>
        <div>
          <Comments id={this.props.post.id} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.post
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetPostById: id => {
      dispatch(getPostById(id));
    }

  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
