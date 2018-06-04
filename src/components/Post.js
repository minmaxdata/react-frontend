import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import * as FontAwesome from "react-icons/lib/fa";
import * as ReadableAPI from "../utils/api";

class Post extends React.Component {
  state = {
    redirect: false
  };
  handleDEdit = () => {
    const id = this.props.post.id;
    console.log('post id ', id)
  };

  handleDelete = () => {
    const id = this.props.post.id;
    ReadableAPI.deletePost(id).then(response => {
      this.setState({ redirect: true });
    });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <li className="post">
        <div>
        <Link to={`/posts/${this.props.post.id}`}>
         {this.props.post.title}
        </Link></div>
        <div>
          <button onClick={() => this.handleEdit()}>
            <FontAwesome.FaEdit />
          </button>
          <button onClick={() => this.handleDelete()}>
            <FontAwesome.FaTimesCircle />
          </button>
        </div>
      </li>
    );
  }
}
export default Post;
