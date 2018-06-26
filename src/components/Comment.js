import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import * as FontAwesome from "react-icons/lib/fa";
import { castVote, deleteComment } from "./../actions/comments";
import { getPostById } from "./../actions/post";
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
    this.props.dispatchDeleteComment(id);
  };
  castVote = payload => {
    console.log("vote payload ", payload);
    this.props.dispatchCastVote(payload);
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

const mapDispatchToProps = dispatch => {
  return {
    dispatchDeleteComment: id => {
      dispatch(deleteComment(id));
    },
    dispatchCastVote: payload => {
      dispatch(castVote(payload));
    },
    dispatchGetPost: comment => {
      dispatch(getPostById(comment));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Comment);
