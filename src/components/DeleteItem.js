import React from "react";
import * as FontAwesome from "react-icons/lib/fa";

const DeleteItem = ({itemId, onDelete}) => {
  const removeItem = itemId => {
    onDelete(itemId);
  };

  return (
    <button className="btn btn-outline-primary" onClick={removeItem}>
      <FontAwesome.FaTimesCircle />
    </button>
  );
};


export default DeleteItem;
