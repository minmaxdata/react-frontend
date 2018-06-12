import React, { Component } from "react";
import * as ReadableAPI from "../utils/api";
import Post from "./Post";

class Posts extends React.Component {
  state = {
    sortBy: "all",
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
  componentWillReceiveProps(nextProps) {
    console.log(" next props ", nextProps.match.params);
    let param = nextProps.match.params["category"];
    if (typeof param === "undefined") {
      this.getOrRefreshPosts();
    } else {
      this.getPostsByCategory(param);
    }
  }
  componentDidMount() {
    console.log("props ", this.props);
    this.getOrRefreshPosts();
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
              getPosts={this.getOrRefreshPosts}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default Posts;
