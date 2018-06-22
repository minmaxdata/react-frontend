import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "./../actions/posts";
import * as FontAwesome from "react-icons/lib/fa";

const DeleteItem = props => {
  const removeItem = itemId => {
    props.dispatchDeleteItem(props.itemId);
  };

  return (
    <button className="btn btn-outline-primary" onClick={removeItem}>
      <FontAwesome.FaTimesCircle />
    </button>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchDeleteItem: itemId => {
      dispatch(deleteItem(itemId));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DeleteItem);
