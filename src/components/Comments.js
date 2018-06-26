import React, { Component } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { getCommentsByPostId } from "./../actions/comments";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

class Comments extends Component {
  state = {
    showModal: false
  };
  handleOpenModal = () => {
    this.setState(() => ({ showModal: true }));
  };
  handleCloseModal = () => {
    this.setState(() => ({ showModal: false }));
  };
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
                parentId={this.props.post.id}
                close={this.handleCloseModal}
              />
              </Modal>
          </div>
        </div>

        <ul>
          {this.props.comments.map(comment => (
            <Comment
              key={comment.id}
              comment={comment}
              post={this.props.post}
            />
          ))}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    post: state.post,
    comments: state.comments
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetCommentsByPostId: id => dispatch(getCommentsByPostId(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
