import React, { Component } from "react";
import * as ReadableAPI from "../utils/api";
import Post from "./Post";

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
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps ', nextProps);
    let category = nextProps.match.params["category"];
    if (typeof category === typeof undefined) {
      this.getOrRefreshPosts();
    } else {
      this.setState({ category: category });
      this.getPostsByCategory(category);
    }
  }
  componentDidMount() {

    let category = this.props.location.pathname.replace("/", "");

    console.log('componentDidMount category', category,this.props)
    if (category !== "") {
      this.setState({ category: category });
      this.getPostsByCategory(category);
    }
    if (typeof category === typeof undefined || category === "") {
      this.getOrRefreshPosts();
    }
  }

  render() {
    return (
      <div>
        <ul className="">
          <li className="row">
            <div className="col-md-7">
              <p className="text-left">Title</p>
            </div>
            <div className="col-md-1">
              <p className="text-center">Votes</p>
            </div>
            <div className="col-md-1">
              <p className="text-center">Comments</p>
            </div>
            <div className="col-md-3">
              <p className="text-center">Voting---Edit Delete</p>
            </div>
          </li>
        </ul>
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
export default Posts;
