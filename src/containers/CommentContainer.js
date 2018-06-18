import React from "react";
import Comments from "../components/Comment";

class CommentContainer extends React.Component {
  state = { comment: [] };
  getOrRefreshComment = () => {
    console.log("comments props ", this.props.id);
    let id = this.props.id;

    ReadableAPI.getCommentById(id)
      .then(response => {
        console.log(" comments response ", response);
        this.setState({ comments: response });
      })
      .catch(reason => console.error(reason));
  };

  componentDidMount() {
    this.getOrRefreshComment();
  }

  render() {
    return <Comment comment={this.state.comment} />;
  }
}
export default CommentsContainer
