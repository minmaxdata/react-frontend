import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import serializeForm from "form-serialize";
import uuid from "uuid";
import { connect } from "react-redux";
import { createPost, editPost } from "./../actions/posts";
import * as ReadableAPI from "../utils/api";

class CreatePost extends Component {
  state = {
    title: "",
    author: "",
    category: "react",
    body: "",
    submitted: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  getPostById = id => {
    ReadableAPI.getPostById(id)
      .then(response => {
        this.setState({ ...response });
      })
      .catch(reason => console.error(reason));
  };
  handleSubmit = e => {
    console.log(" state", this.state);
    e.preventDefault();

    const values = serializeForm(e.target, { hash: true });

    if (this.state.id) {
      let post = { ...values, id: this.state.id };
      this.props.dispatchEditPost(post);
    } else {
      let post = {
        ...values,
        id: uuid(),
        timestamp: Date.now()
      };
      this.props.dispatchCreatePost(post);
    }
    this.setState(() => ({
      submitted: true
    }));
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    this.setState({ id: id });
    if (typeof id !== typeof undefined) {
      this.getPostById(id);
    }
    console.log("edit post  ", id, this.state);
  }

  render() {
    if (this.state.submitted) {
      return <Redirect to="/" />;
    } else {
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
                  placeholder="Title"
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
}
function mapStateToProps({ posts }, { categories }) {
  return {
    posts,
    categories
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchCreatePost: post => {
      dispatch(createPost(post));
    },
    dispatchEditPost: post => {
      dispatch(editPost(post));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);
