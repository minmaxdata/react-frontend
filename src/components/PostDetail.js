import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import * as FontAwesome from "react-icons/lib/fa";
import * as ReadableAPI from "../utils/api";
import Comments from "../components/Comments";

class PostDetail extends Component {
  state = {
    post: [],
    redirect: false
  };
  handleEdit = () => {
    const id = this.state.post.id;
    console.log("post id ", id);
  };

  handleDelete = () => {
    const id = this.state.post.id;
    ReadableAPI.deletePost(id).then(response => {
      this.setState({ redirect: true });
    });
  };

  componentDidMount() {
    //const id = this.props.post.id;
    console.log("props ", this.props.match.params.id);
    let id = this.props.match.params.id;
    ReadableAPI.getPostById(id)
      .then(response => {
        this.setState({ post: response });
      })
      .catch(reason => console.error(reason));
    console.log("props ", this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <div className="nav">
          <h3>Post</h3>
          <ul className="categories">
            <li>
              <button onClick={() => this.handleEdit()}>
                <FontAwesome.FaEdit />
              </button>
            </li>
            <li>
              <button onClick={() => this.handleDelete()}>
                <FontAwesome.FaTimesCircle />
              </button>
            </li>
          </ul>
        
        </div>

        <div>
          <div>Title: {this.state.post.title}</div>
          <div>Author: {this.state.post.author}</div>
          <div>Category: {this.state.post.category}</div>
          <div>Body: {this.state.post.body}</div>
        </div>
        <div />

        <div>
          <Comments id={this.props.match.params.id} />
        </div>
      </div>
    );
  }
}

export default PostDetail;
