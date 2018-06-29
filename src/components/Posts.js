import React, { Component } from "react";
import PostsHeader from "./PostsHeader";
import Post from "./Post";
import { connect } from "react-redux";
import { getAllPosts, getPostsByCategory } from "./../actions/posts";
import { setCategory } from "./../actions/category";
import { Categories } from "./../actions/types";
import arraySort from "array-sort";

class Posts extends Component {
  componentWillReceiveProps(nextProps) {
    const currentUrl = this.props.match.params.category;
    const nextUrl = nextProps.match.params.category;

    if (currentUrl !== nextUrl) {
      let category = Categories.SET_ALL;
      if (nextUrl === "react") {
        category = Categories.SET_REACT;
      } else if (nextUrl === "redux") {
        category = Categories.SET_REDUX;
      } else if (nextUrl === "udacity") {
        category = Categories.SET_UDACITY;
      }

      this.setCategory(category);

      if (category !== Categories.SET_ALL) {
        this.getPostsByCategory(category);
      } else {
        this.getAllPosts();
      }
    }
  }
  getPostsByCategory = async category => {
    try {
      await this.props.dispatchGetPostsByCategory(category);
    } catch (err) {
      // Handle the error
      alert(JSON.stringify(err));
    }
  };
  getAllPosts = async () => {
    try {
      await this.props.dispatchGetAllPosts();
    } catch (err) {
      // Handle the error
      alert(JSON.stringify(err));
    }
  };
  setCategory = async category => {
    try {
      await this.props.dispatchSetCategory(category);
    } catch (err) {
      // Handle the error
      alert(JSON.stringify(err));
    }
  };
  sortPostsByVotes = () => {
    const sortPostsByVotes = arraySort(this.props.posts, "voteScore", {
      reverse: true
    });
    return sortPostsByVotes;
  };
  componentDidMount() {
    this.getAllPosts();
    this.setCategory(Categories.SET_ALL);
  }

  render() {
    return (
      <div>
        <PostsHeader sort={this.sortPostsByVotes} />
        {this.props.loading ? "Loading..." : ""}
        <ul className="">
          {this.sortPostsByVotes(this.props.posts).map(post => (
            <Post key={post.id} post={post} itemId={post.id} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetAllPosts: () => {
      dispatch(getAllPosts());
    },
    dispatchGetPostsByCategory: category => {
      dispatch(getPostsByCategory(category));
    },
    dispatchSetCategory: category => {
      dispatch(setCategory(category));
    }
  };
};
function mapStateToProps({ posts }) {
  return {
    posts
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
