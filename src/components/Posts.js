import React, { Component } from "react";
import * as ReadableAPI from "../utils/api";
import Post from "./Post";

class Posts extends React.Component {
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
  }
  componentWillReceiveProps(nextProps) {
    let category = nextProps.match.params["category"];
    this.setState({ category: category });
    if (typeof category === undefined) {
      this.getOrRefreshPosts();
    } else {
      this.getPostsByCategory(category);
    }
  }
  componentDidMount() {
    let category = this.props.location.pathname.replace("/", "");
    this.setState({ category: category });
    if (category !== "") {
      this.getPostsByCategory(category);
    } else {
      this.getOrRefreshPosts();
    }
  }

  render() {
    return (
      <div>
        <ul className="">
          <li className="row">
            <div className="col-md-4">
              <p className="text-center">Title</p>
            </div>
            <div className="col-md-2">
              <p className="text-center"># Votes</p>
            </div>
            <div className="col-md-2">
              <p className="text-center"># Comments</p>
            </div>
            <div className="col-md-2">
              <p className="text-center">Voting</p>
            </div>
            <div className="col-md-2">
              <p className="text-center">Edit Delete</p>
            </div>
          </li>
        </ul>
        <ul className="">
          {this.state.posts.map(post => (
            <Post
              key={post.id}
              post={post}
              type={"post"}
              itemId={post.id}
              getPosts={this.handleGetPost}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default Posts;
