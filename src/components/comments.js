import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import * as FontAwesome from "react-icons/lib/fa";
import * as ReadableAPI from "../utils/api";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

class Comments extends React.Component {
  state = {
    comments: [],
    showModal: false
  };
  handleOpenModal = () => {
    this.setState(() => ({ showModal: true }));
  };
  handleCloseModal = () => {
    this.setState(() => ({ showModal: false }));
  };

  componentDidMount() {
    console.log("comments props ", this.props.id);
    let id = this.props.id;
    ReadableAPI.getComments(id)
      .then(response => {
        console.log(" comments response ", response);
        this.setState({ comments: response });
      })
      .catch(reason => console.error(reason));
  }

  render() {
    return (
      <div>
        <div className="nav">
          <h3>Comments</h3>
        </div>
        <button onClick={this.handleOpenModal}>Add Comment</button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <CreateComment parentId ={this.props.id} />
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
        <ul className="">
          {this.state.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </ul>
      </div>
    );
  }
}
export default Comments;
