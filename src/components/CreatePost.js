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

  getPostById = id => {
    ReadableAPI.getPostById(id)
      .then(response => {
        this.setState({ ...response });
      })
      .catch(reason => console.error(reason));
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const values = serializeForm(e.target, { hash: true });

    if (this.state.id) {
      let payload = { ...values, id: this.state.id };
      ReadableAPI.editPost(payload).then(response => {
        this.props.history.goBack();
      });
    } else {
      let post = {
        ...values,
        id: uuid(),
        timestamp: Date.now()
      };
      ReadableAPI.addPost(post).then(response => {
        this.props.history.goBack();
      });
    }
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    this.setState({ id: id });
    console.log("edit post  ", this.props);
    if (typeof id !== typeof undefined) {
      this.getPostById(id);
    }
  }

  render() {
    return (
      <div>
        <Link className="btn " to="/">
          Return to main page
        </Link>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <div>
            <label>
              Title:
              <input
                type="text"
                name="title"
                placeholder="Author"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </label>
          </div>
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
            Category:
            <select
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            >
              <option value="react">React</option>
              <option value="redux">Redux</option>
              <option value="udacity">Udacity</option>
            </select>
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
            <input className="btn" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePost;
