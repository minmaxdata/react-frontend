import { React, Component } from "react";
import * as ReadableAPI from "../utils/api";
import Comments from "../components/CommentManager";

class CommentContainer extends Component {
  state = {
    comment: [],
    showModal: false
  }
    deleteComment = () => {
      let id = this.props.comment.id;
      this.props.deleteComment(id);
    };
    openEditModal = () => {
      this.setState({ showModal: true });
    };
    closeEditModal = () => {
      this.setState({ showModal: false });
      this.props.refresh();
    };
    castVote = (payload) => {
      ReadableAPI.voteComment(payload).then(response => {});
    };
    onVote = () => {
      console.log('onvote')
      this.props.refresh();
    }
  render() {
    return (
      <CommentManager itemId={this.props.comment.id} onVote={castVote} onEdit={openEditModal} delete={deleteComment}/>
    )
  }
}
export default CommentContainer
