import React, { Component } from "react";
import { Link } from "react-router-dom";
import serializeForm from "form-serialize";
import uuid from "uuid";
import * as ReadableAPI from "../utils/api";

class CreatePost extends Component {
  state = {
    title: "",
    author: "",
    category: "react",
    body: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    const values = serializeForm(e.target, { hash: true });
    const post = {
      ...values,
      id: uuid(),
      timestamp: Date.now()
    };
    ReadableAPI.addPost(post).then(response => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div>
        <Link className="" to="/">
          Return to main page
        </Link>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <div>
            Title:
            <input type="text" name="title" placeholder="Title" />
          </div>
          <div>
            Author:
            <input type="text" name="author" placeholder="Author" />
          </div>
          <div>
            Category:
            <select name="category">
              <option value="react">React</option>
              <option value="redux">Redux</option>
              <option value="udacity">Udacity</option>
            </select>
          </div>
          <div>Body: </div>
          <input name="body" type="text" />

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePost;
