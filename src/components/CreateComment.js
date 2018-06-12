import React, { Component } from "react";
import Modal from "react-modal";
import serializeForm from "form-serialize";
import uuid from "uuid";
import * as ReadableAPI from "../utils/api";

class CreateComment extends Component {
  state = {
    author: "",
    body: "",
  };
  getComment = id => {
    ReadableAPI.getComment(id)
      .then(response => {
        this.setState({ ...response });
      })
      .catch(reason => console.error(reason));
  };
  handleCloseModal = () => {
    console.log('close? ', this.props)
    this.props.close();
  }

  handleSubmit = e => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    console.log('value ', values)
    if (this.props.comment.id) {
      let payload = { ...values, id: this.props.comment.id};
      ReadableAPI.editComment(payload).then(response => {
        console.log("response ", response);
        //shut the modal and redirect to post page
        this.handleCloseModal()
      });
    } else {
      let comment = {
        ...values,
        id: uuid(),
        parentId: this.props.parentId,
        timestamp: Date.now(),
        voteScore: 0,
        deleted: false,
        parentDeleted: false
      };
      ReadableAPI.addComment(comment).then(response => {
        console.log("response ", response);
        //shut the modal and redirect to post page
          this.handleCloseModal()
      });
    }
  };
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});

  };
  componentDidMount() {
    if (this.props.comment.id) {
      this.getComment(this.props.comment.id);
    }
  }

  render() {
    return (
      <div>
        <div>
          <strong> Add Comment </strong>
        </div>
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
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateComment;
