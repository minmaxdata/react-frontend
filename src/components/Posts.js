import React, { Component } from "react";
import * as ReadableAPI from "../utils/api";
import Post from "./Post";

class Posts extends React.Component {
  state = {
    sortBy: "all",
    posts: []
  };

  componentDidMount() {
    ReadableAPI.getPosts()
      .then(response => {
        this.setState({ posts: response });
      })
      .catch(reason => console.error(reason));
  }

  render() {
    return (
      <div>
        <ul className="">
          <li className='post'><div>Title</div><div>Votes</div></li>
        </ul>
        <ul className="">
          {this.state.posts.map(post => <Post key={post.id} post={post} />)}
        </ul>
      </div>
    );
  }
}
export default Posts;
