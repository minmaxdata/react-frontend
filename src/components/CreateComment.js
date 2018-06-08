import React, { Component } from "react";
import { Link } from "react-router-dom";
import serializeForm from "form-serialize";
import uuid from "uuid";
import * as ReadableAPI from "../utils/api";

class CreateComment extends Component {
  state = {
    author: "",
    body: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const values = serializeForm(e.target, { hash: true });
    const comment = {
      ...values,
      id: uuid(),
      parentId: this.props.post,
      timestamp: Date.now(),
      voteScore: 0,
      deleted: false,
      parentDeleted: false
    };
    console.log(" post comment", e);
    ReadableAPI.addComment(comment).then(response => {
      console.log("response ", response);
      //shut the modal and redirect to post page
    });
  };

  render() {
    return (
      <li>
        <hr />
        <div>
          <strong> Add Comment </strong>
        </div>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <div>
            Author:
            <input type="text" name="author" placeholder="Author" />
          </div>
          <div>
            Body:
            <input name="body" type="text" />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </li>
    );
  }
}

export default CreateComment;
