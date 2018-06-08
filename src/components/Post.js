import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as FontAwesome from "react-icons/lib/fa";
import * as ReadableAPI from "../utils/api";

class Post extends React.Component {
  render() {
    return (
      <li className="post">
        <div>
        <Link to={`${this.props.post.category}/${this.props.post.id}`}>
         {this.props.post.title}
        </Link></div>
        <div>
          <span>{this.props.post.commentCount}</span>
        </div>
      </li>
    )
  }
}
export default Post;
