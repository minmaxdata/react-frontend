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
    redirect: false
  };

  getOrRefreshPost = id => {
    ReadableAPI.getPostById(id)
      .then(response => {
        this.setState({ post: response });
      })
      .catch(reason => console.error(reason));
  };

  updateRoute = () => {
    console.log("update route props ", this.props);
    this.props.history.push("/");
  };
  refreshPost = () => {
    console.log("refresh post ", this.props);
    let id = this.state.post.id;
    this.getOrRefreshPost(id);
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
                type={"post"}
                itemId={this.state.post.id}
                getPost={this.refreshPost}
              />
              <Link
                className="btn btn-outline-primary"
                role="button"
                to={`/${this.state.post.category}/${this.state.post.id}/edit`}
              >
                <EditItem />
              </Link>
              <DeleteItem
                type={"post"}
                itemId={this.state.post.id}
                getPosts={this.updateRoute}
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
