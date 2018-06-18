import React, { Component } from "react";
import Modal from "react-modal";
import * as ReadableAPI from "../utils/api";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

class Comments extends Component {
  state = {
    comments: [],
    showModal: false
  };
  handleOpenModal = () => {
    this.setState(() => ({ showModal: true }));
  };
  handleCloseModal = () => {
    this.getOrRefreshComments();
    this.setState(() => ({ showModal: false }));
  };

  deleteComment = id => {
    ReadableAPI.deleteComment(id)
      .then(response => {
        this.getOrRefreshComments();
      })
      .catch(reason => console.error(reason));
  };

  editComment = () => {
    this.handleOpenModal();
  };

  getOrRefreshComments = () => {
    console.log("comments props ", this.props.id);
    let id = this.props.id;

    ReadableAPI.getComments(id)
      .then(response => {
        console.log(" comments response ", response);
        this.setState({ comments: response });
      })
      .catch(reason => console.error(reason));
  };

  componentDidMount() {
    this.getOrRefreshComments();
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row">
          <div className="col-md-9">
            <h4>Comments</h4>
          </div>
          <div className="col-md-3">
            <button
              className="btn btn-outline-primary"
              onClick={this.handleOpenModal}
            >
              Add Comment
            </button>
            <Modal isOpen={this.state.showModal} ariaHideApp={false}>
              <CreateComment
                parentId={this.props.id}
                comment={false}
                close={this.handleCloseModal}
              />
              <button onClick={this.handleCloseModal}>Close Modal</button>
            </Modal>
          </div>
        </div>
        <ul>
          {this.state.comments.map(comment => (
            <Comment
              key={comment.id}
              comment={comment}
              deleteComment={this.deleteComment}
              editComment={this.editComment}
              refresh={this.getOrRefreshComments}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default Comments;
