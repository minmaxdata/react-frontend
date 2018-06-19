import React, { Component } from "react";
import * as ReadableAPI from "../utils/api";
import PostsHeader from "./PostsHeader";
import Post from "./Post";
import { connect } from "react-redux";
import { getPosts } from "./../actions/posts";
import { CategorySelections } from "./../actions/types";

class Posts extends Component {
  state = {
    category: "",
    posts: []
  };

  getOrRefreshPosts = () => {
    ReadableAPI.getPosts()
      .then(response => {
        this.setState({ posts: response });
      })
      .catch(reason => console.error(reason));
  };
  getPostsByCategory = id => {
    ReadableAPI.getPostByCategory(id)
      .then(response => {
        this.setState({ posts: response });
      })
      .catch(reason => console.error(reason));
  };

  handleGetPost = category => {
    this.getPostsByCategory(category);
  };
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps ", nextProps);
    let category = nextProps.match.params["category"];
    if (typeof category === typeof undefined) {
      this.getOrRefreshPosts();
    } else {
      this.setState({ category: category });
      this.getPostsByCategory(category);
    }
  }
  componentDidMount() {
    console.log(' this.props ', this.props)
    this.props.dispatchGetPosts();
  }

  render() {
    return (
      <div>
        <PostsHeader />
        <ul className="">
          {this.state.posts.map(post => (
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
    dispatchGetPosts: () => {
      dispatch(getPosts());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
