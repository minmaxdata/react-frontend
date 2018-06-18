import React, { Component } from "react";
import Modal from "react-modal";
import * as FontAwesome from "react-icons/lib/fa";
import * as ReadableAPI from "../utils/api";
import CreateComment from "./CreateComment";
import Vote from "./Vote";

const CommentManager = ({itemId, onVote, onEdit, onDelete}) => {
  return (
    <div className="col-md-3">
      <Vote castVote={onVote} itemId={itemId} onVote={onVote} />

      <button className="btn btn-outline-primary" onClick={onEdit}>
        <FontAwesome.FaEdit />
      </button>
      <button className="btn btn-outline-primary" onClick={onDelete}>
        <FontAwesome.FaTimesCircle />
      </button>
      <Modal isOpen={false} ariaHideApp={false}>
        <CreateComment comment={false} close={false} />
        <button
          className="btn btn-outline-primary"
          onClick={false}
        >
          Close Modal
        </button>
      </Modal>
    </div>
  );
};
export default CommentManager;
