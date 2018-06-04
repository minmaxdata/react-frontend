import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ReadableAPI from "../utils/api";

class PostDetail extends Component {
  state = {
    post: []
  };

  componentDidMount() {
      //const id = this.props.post.id;
      console.log('props ', this.props.match.params.id)
      let id = this.props.match.params.id
    ReadableAPI.getPostById(id)
      .then(response => {
        this.setState({ post: response });
      })
      .catch(reason => console.error(reason));
        console.log('props ', this.props.match.params.id)
  }


  render() {
    return (
      <div>
          <div>
            Title: {this.state.post.title}
          </div>
          <div>
            Author: {this.state.post.author}
          </div>
          <div>
            Category: {this.state.post.category}
          </div>
          <div>Body: {this.state.post.body}
          </div>

          <div>
          </div>
      </div>
    );
  }
}

export default PostDetail;
