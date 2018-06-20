import React, { Component } from "react";
import PostsHeader from "./PostsHeader";
import Post from "./Post";
import { connect } from "react-redux";
import { getAllPosts, getPostsByCategory } from "./../actions/posts";
import { CategorySelections } from "./../actions/types";

class Posts extends Component {
  componentWillReceiveProps(nextProps) {
    const currentUrl = this.props.match.params.category;
    const nextUrl = nextProps.match.params.category;
    console.log("componentWillReceiveProps ", currentUrl, nextUrl);

    if (currentUrl !== nextUrl) {
      let category = CategorySelections.SET_ALL;
      if (nextUrl === "react") {
        category = CategorySelections.SET_REACT;
      } else if (nextUrl === "redux") {
        category = CategorySelections.SET_REDUX;
      } else if (nextUrl === "udacity") {
        category = CategorySelections.SET_UDACITY;
      }

      if (category !== CategorySelections.SET_ALL) {
        this.props.dispatchGetPostsByCategory(category);
      } else {
        this.props.dispatchGetAllPosts();
      }
    }
  }

  componentDidMount() {
    console.log(" componentDidMount ", this.props);
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
    posts: state.posts,
    categorySelected: state.categorySelected
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetAllPosts: () => {
      dispatch(getAllPosts());
    },
    dispatchGetPostsByCategory: category => {
      dispatch(getPostsByCategory(category));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
