import React, { Component } from "react";
import { Link } from "react-router-dom";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
import Vote from "./Vote";

class Post extends Component {

  render() {
    const post = this.props.post;

    return (
      <p className="text-center">
        <Vote
          itemId={post.id}
          castVote={this.castVote}
          onVote={this.refreshPosts}
        />
        <Link
          className="btn"
          role="button"
          to={`/${post.category}/${post.id}/edit`}
        >
          <EditItem />
        </Link>
        <DeleteItem
          deleteItem={this.deletePost}
          itemId={post.id}
          onDelete={this.refreshPosts}
        />
      </p>
    );
  }
}
export default Post;
