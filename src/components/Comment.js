import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import * as FontAwesome from "react-icons/fa";
import { castVote, deleteComment } from "./../actions/comments";
import CreateComment from "./CreateComment";
import Vote from "./Vote";

class Comment extends Component {
  state = {
    showModal: false
  };
  handleOpenModal = () => {
    this.setState(() => ({ showModal: true }));
  };
  handleCloseModal = () => {
    this.setState(() => ({ showModal: false }));
  };

  deleteComment = () => {
    let id = this.props.comment.id;
    this.props.deleteComment(id);
  };
  castVote = payload => {
    this.props.castVote(payload);
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
          <Vote itemId={this.props.comment.id} onVote={this.castVote} />

          <button
            className="btn btn-outline-primary"
            onClick={this.handleOpenModal}
          >
            <FontAwesome.FaEdit />
          </button>
          <Modal isOpen={this.state.showModal} ariaHideApp={false}>
            <CreateComment
              parentId={this.props.post.id}
              close={this.handleCloseModal}
              commentId={this.props.comment.id}
            />
          </Modal>

          <button
            className="btn btn-outline-primary"
            onClick={this.deleteComment}
          >
            <FontAwesome.FaTimesCircle />
          </button>
        </div>
      </li>
    );
  }
}
export default connect(
  null,
  { castVote, deleteComment }
)(Comment);
