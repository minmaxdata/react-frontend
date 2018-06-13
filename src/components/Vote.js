import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import * as FontAwesome from "react-icons/lib/fa";
import * as ReadableAPI from "../utils/api";

class Vote extends React.Component {
  handleVotePost = payload => {
    ReadableAPI.votePost(payload).then(response => {
      this.props.getPosts(payload.itemId);
      console.log("post vote response ",response);
    });
  };
  handleVoteComment = payload => {
    ReadableAPI.voteComment(payload).then(response => {
      console.log("comment vote response ",response);
    });
  };

  castVote = payload => {
    switch (this.props.type) {
      case "post":
        this.handleVotePost(payload);
        break;
      case "comment":
        this.handleVoteComment(payload);
        break;
      default:
        console.log("Sorry");
    }
  };

  voteUp = () => {
    let payload = { option: "upVote", id: this.props.itemId };
    this.castVote(payload);
  };
  voteDown = () => {
    let payload = { option: "downVote", id: this.props.itemId };
    this.castVote(payload);
  };

  render() {
    return (
      <span>
        <button className="btn btn-outline-primary" role="button" onClick={this.voteUp}>
          <FontAwesome.FaThumbsOUp />
        </button>
        <button className="btn btn-outline-primary" onClick={this.voteDown}>
          <FontAwesome.FaThumbsODown />
        </button>
      </span>
    );
  }
}
export default Vote;
