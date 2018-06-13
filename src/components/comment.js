import React, { Component } from "react";
import Modal from "react-modal";
import * as FontAwesome from "react-icons/lib/fa";
import * as ReadableAPI from "../utils/api";
import CreateComment from "./CreateComment";

class Comment extends React.Component {
  state = {
    showModal: false
  };
  deleteComment = () => {
    let id = this.props.comment.id;
    this.props.deleteComment(id);
  };
  openEditModal = () => {
    this.setState({ showModal: true });
  };
  closeEditModal = () => {
    this.setState({ showModal: false });
    this.props.refresh();
  };
  render() {
    return (
      <li className="row pt-2">
        <div className="col-md-9">
          <div>Body: {this.props.comment.body}</div>
          <div>Author: {this.props.comment.author}</div>
          <div>VoteScore: {this.props.comment.voteScore}</div>
        </div>
        <div className="col-md-3">
          <button   className="btn" onClick={this.openEditModal}>
            <FontAwesome.FaEdit />
          </button>
          <button   className="btn" onClick={this.deleteComment}>
            <FontAwesome.FaTimesCircle />
          </button>
        </div>
        <Modal isOpen={this.state.showModal} ariaHideApp={false}>
          <CreateComment
            comment={this.props.comment}
            close={this.closeEditModal}
          />
          <button   className="btn" onClick={this.closeEditModal}>Close Modal</button>
        </Modal>
      </li>
    );
  }
}
export default Comment;
