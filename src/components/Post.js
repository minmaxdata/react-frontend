import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ReadableAPI from "../utils/api";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
import Vote from "./Vote";

class Post extends Component {
  refreshPosts = (category) => {
    console.log("refresh posts ", category, this.props);
    this.props.getPosts(this.props.post.category);
  };
  deletePost = (id) => {
    ReadableAPI.deletePost(id).then(response => {});
  }
  castVote = payload => {
    ReadableAPI.votePost(payload).then(response => {});
  };

  render() {
    return (
      <li className="row">
        <div className="col-md-7">
          <Link to={`${this.props.post.category}/${this.props.post.id}`}>
            {this.props.post.title}
          </Link>
        </div>
        <div className="col-md-1">
          <p className="text-center">{this.props.post.voteScore}</p>
        </div>
        <div className="col-md-1">
          <p className="text-center">{this.props.post.commentCount}</p>
        </div>
        <div className="col-md-3">
          <p className="text-center">
            <Vote
              itemId={this.props.post.id}
              castVote={this.castVote}
              onVote={this.refreshPosts}
            />
              <Link
              className="btn"
              role="button"
              to={`/${this.props.post.category}/${this.props.post.id}/edit`}
            >
              <EditItem />
            </Link>
            <DeleteItem
              deleteItem={this.deletePost}
              itemId={this.props.post.id}
              onDelete={this.refreshPosts}
            />
          </p>
        </div>
      </li>
    );
  }
}
export default Post;
