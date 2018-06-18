import React, { Component } from "react";
import Modal from "react-modal";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

const Comments = ({comments}) =>  {
    return (
      <div>
        <hr />
        <div className="row">
          <div className="col-md-9">
            <h4>Comments</h4>
          </div>
          <div className="col-md-3"></div>
        </div>
        <ul>
          {comments.map(comment => (
            <Comment
              key={comment.id}
              comment={comment}
            />
          ))}
        </ul>
      </div>
    );
}
export default Comments;
