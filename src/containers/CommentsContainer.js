import React from "react";
import * as ReadableAPI from "../utils/api";
import Comments from "../components/Comments";

class CommentsContainer extends React.Component {
  state = { comments: [] };
  getOrRefreshComments = () => {
    console.log("comments props ", this.props.id);
    let id = this.props.id;

    ReadableAPI.getComments(id)
      .then(response => {
        console.log(" comments response ", response);
        this.setState({ comments: response });
      })
      .catch(reason => console.error(reason));
  };

  componentDidMount() {
    this.getOrRefreshComments();
  }

  render() {
    return <Comments comments={this.state.comments} />;
  }
}
export default CommentsContainer;
