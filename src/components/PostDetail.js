import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import * as ReadableAPI from "../utils/api";
import Comments from "../components/Comments";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
import Vote from "./Vote";

class PostDetail extends Component {
  state = {
    post: [],
    category: ""
  };

  getOrRefreshPost = id => {
    ReadableAPI.getPostById(id)
      .then(response => {
        this.setState({ post: response, category: response.category });
      })
      .catch(reason => console.error(reason));
  };
  updateDelete = () => {
    console.log("update delete  ", this.props, this.state);
    this.props.history.push("/");
  };
  refreshPost = () => {
    console.log("refresh post ", this.props);
    let id = this.state.post.id;
    this.getOrRefreshPost(id);
  };
  deletePost = id => {
    console.log("delete post ", id);
    ReadableAPI.deletePost(id).then(response => {
      console.log("delete post callback", response);
    });
  };
  castVote = payload => {
    ReadableAPI.votePost(payload).then(response => {
    });
  };

  componentDidMount() {
    //const id = this.props.post.id;
    console.log("post detail props ", this.props);
    let id = this.props.match.params.id;
    this.getOrRefreshPost(id);
  }

  render() {
    return (
      <div>
        <ul className="row">
          <li className="col-md-12">
            <h4>Post</h4>
          </li>
        </ul>

        <ul className="row">
          <li className="col-md-9">
            <div>Title: {this.state.post.title}</div>
            <div>Author: {this.state.post.author}</div>
            <div>Category: {this.state.post.category}</div>
            <div>Body: {this.state.post.body}</div>
            <div>VoteScore: {this.state.post.voteScore}</div>
            <div>Comment Count: {this.state.post.commentCount}</div>
          </li>
          <li className="col-md-3">
            <p className="text-center">
              <Vote
                castVote={this.castVote}
                itemId={this.state.post.id}
                onVote={this.refreshPost}
              />
              <Link
                className="btn btn-outline-primary"
                role="button"
                to={`/${this.state.post.category}/${this.state.post.id}/edit`}
              >
                <EditItem />
              </Link>
              <DeleteItem
                deleteItem={this.deletePost}
                itemId={this.state.post.id}
                onDelete={this.updateDelete}
              />
            </p>
          </li>
        </ul>
        <div>
          <Comments id={this.props.match.params.id} />
        </div>
      </div>
    );
  }
}

export default PostDetail;
