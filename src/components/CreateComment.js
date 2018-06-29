import React, { Component } from "react";
import serializeForm from "form-serialize";
import uuid from "uuid";
import { connect } from "react-redux";
import { createComment, editComment } from "./../actions/comments";
import { getPostById } from "./../actions/post";
import * as ReadableAPI from "../utils/api";

class CreateComment extends Component {
  state = {
    author: "",
    body: "",
    id: ""
  };
  getComment = id => {
    ReadableAPI.getComment(id)
      .then(response => {
        this.setState({ ...response });
      })
      .catch(reason => console.error(reason));
  };

  handleSubmit = e => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    if (this.state.id === "") {
      let comment = {
        ...values,
        id: uuid(),
        parentId: this.props.parentId,
        timestamp: Date.now(),
        voteScore: 0,
        deleted: false,
        parentDeleted: false
      };
      this.props.dispatchCreateComment(comment);
    } else {
      let comment = { ...values, id: this.props.commentId };
      this.props.dispatchEditComment(comment);
    }
    this.props.dispatchGetPost(this.props.parentId);
    this.props.close();
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    console.log(" create comment ", this.props);
    this.getComment(this.props.commentId);
  }

  render() {
    return (
      <div>
        <h4>Add Comment</h4>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <div>
            <label>
              Author:
              <input
                type="text"
                name="author"
                placeholder="Author"
                value={this.state.author}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              <div>Body:</div>
              <textarea
                name="body"
                value={this.state.body}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <input
              className="btn btn-outline-primary"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchCreateComment: comment => {
      dispatch(createComment(comment));
    },
    dispatchEditComment: comment => {
      dispatch(editComment(comment));
    },
    dispatchGetPost: id => {
      dispatch(getPostById(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateComment);
