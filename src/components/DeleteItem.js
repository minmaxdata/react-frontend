import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import * as FontAwesome from "react-icons/lib/fa";
import * as ReadableAPI from "../utils/api";

class DeleteItem extends React.Component {
  state = {
    redirect: false
  };

  handleDeletePost = id => {
    ReadableAPI.deletePost(id).then(response => {
      console.log(' delete posts ', this.props)
          this.props.getPosts();
    });
  };
  handleDeleteComment = id => {
    ReadableAPI.deleteComment(id).then(response => {
      this.setState({ redirect: true });
    });
  };

  deleteItem = () => {
    console.log(' props ', this.props)
    switch (this.props.type) {
      case "post":
        this.handleDeletePost(this.props.itemId);
        break;
      case "comment":
        this.handleDeleteComment(this.props.itemId);
        break;
      default:
        console.log("Sorry, we are out of ");
    }
  };

  render() {
    return (
      <span>
        <button className='btn btn-outline-primary' onClick={this.deleteItem}>
          <FontAwesome.FaTimesCircle />
        </button>
      </span>
    );
  }
}
export default DeleteItem;
