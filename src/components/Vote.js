import React from "react";
import * as FontAwesome from "react-icons/fa";

const Vote = ({ itemId, onVote }) => {
  const voteOnItem = async payload => {

    let params = { ...payload, id: itemId };
    try {
      await onVote(params);
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
export default Vote;
