import React, { Component } from "react";
import PostsHeader from "./PostsHeader";
import Post from "./Post";
import { connect } from "react-redux";
import { getAllPosts } from "./../actions/posts";
import { CategorySelections } from "./../actions/types";

class Posts extends Component {

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps ", nextProps);

  }
  componentDidMount() {
    console.log(' componentDidMount ', this.props)
    this.props.dispatchGetAllPosts();
  }

  render() {
    return (
      <div>
        <PostsHeader />
        <ul className="">
          {this.props.posts.map(post => (
            <Post
              key={post.id}
              post={post}
              itemId={post.id}
              getPosts={this.handleGetPost}
            />
          ))}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetAllPosts: () => {
      dispatch(getAllPosts());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
