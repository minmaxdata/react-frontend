import React from "react";
import CommentManager from './CommentManager'

const Comment = ({comment}) =>  {
    return (
      <li className="row pt-2">
        <div className="col-md-9">
          <div>Body: {comment.body} : {comment.author}</div>
          <div>VoteScore: {comment.voteScore}</div>
        </div>
        <CommentManager />
      </li>
    );
}
export default Comment;
