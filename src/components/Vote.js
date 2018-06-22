import React from "react";
import { connect } from "react-redux";
import { castVote } from "./../actions/posts";
import * as FontAwesome from "react-icons/lib/fa";

const Vote = ({itemId}) => {
  const voteOnItem = async payload => {
    let params = { ...payload, id: itemId };
    try {
      await this.dispatchCastVote(params);
    } catch (err) {
      // Handle the error
      alert(JSON.stringify(err));
    }
  };

  const voteUp = () => {
    let payload = { option: "upVote" };
    voteOnItem(payload);
  };
  const voteDown = () => {
    let payload = { option: "downVote" };
    voteOnItem(payload);
  };

  return (
    <span>
      <button className="btn btn-outline-primary" onClick={voteUp}>
        <FontAwesome.FaThumbsOUp />
      </button>
      <button className="btn btn-outline-primary" onClick={voteDown}>
        <FontAwesome.FaThumbsODown />
      </button>
    </span>
  );
};
export default connect()(Vote);
