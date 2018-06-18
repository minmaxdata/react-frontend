import React, { Component } from "react";
import * as FontAwesome from "react-icons/lib/fa";

class Vote extends Component {
  voteOnItem = async (payload) => {
    const { castVote, itemId, onVote } = this.props;
    console.log('vote ', this.props)
    let params = {...payload, id: itemId};
    try {
      await this.props.castVote(params);
      this.props.onVote(); // callback
    } catch (err) {
      // Handle the error
      alert(JSON.stringify(err));
    }
  };

  voteUp = () => {
    let payload = { option: "upVote"};
    this.voteOnItem(payload);
  };
  voteDown = () => {
    let payload = { option: "downVote" };
    this.voteOnItem(payload);
  };

  render() {
    return (
      <span>
        <button
          className="btn btn-outline-primary" onClick={this.voteUp}>
          <FontAwesome.FaThumbsOUp />
        </button>
        <button
        className="btn btn-outline-primary" onClick={this.voteDown}>
          <FontAwesome.FaThumbsODown />
        </button>
      </span>
    );
  }
}
export default Vote;
