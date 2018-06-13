import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
import Vote from "./Vote";

class Post extends React.Component {
  refreshPosts = () => {
    console.log("refresh posts ", this.props.post.category);
    this.props.getPosts(this.props.post.category);
  };
  render() {
    return (
      <li className="row">
        <div className="col-md-4">
          <Link to={`${this.props.post.category}/${this.props.post.id}`}>
            {this.props.post.title}
          </Link>
        </div>
        <div className="col-md-2">
          <p className="text-center">{this.props.post.voteScore}</p>
        </div>
        <div className="col-md-2">
          <p className="text-center">{this.props.post.commentCount}</p>
        </div>
        <div className="col-md-2">
          <p className="text-center">
            <Vote
              type={"post"}
              itemId={this.props.post.id}
              category={this.props.post.category}
              getPosts={this.refreshPosts}
            />
          </p>
        </div>
        <div className="col-md-2">
          <p className="text-center">
            <Link
              className="btn"
              role="button"
              to={`/${this.props.post.category}/${this.props.post.id}/edit`}
            >
              <EditItem />
            </Link>

            <DeleteItem
              type={"post"}
              itemId={this.props.post.id}
              getPosts={this.refreshPosts}
            />
          </p>
        </div>
      </li>
    );
  }
}
export default Post;
