import React, { Component } from "react";
import * as FontAwesome from "react-icons/lib/fa";
import * as ReadableAPI from "../utils/api";

class Comment extends React.Component {
  render() {
    return (
      <li className="post">
        <div>
          <div>Body: {this.props.comment.body}</div>
          <div>Author: {this.props.comment.author}</div>
          <div>VoteScore: {this.props.comment.voteScore}</div>
        </div>
        <div>
          <FontAwesome.FaEdit />
          <FontAwesome.FaTimesCircle />
        </div>
      </li>
    );
  }
}
export default Comment;
