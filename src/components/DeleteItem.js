import React from "react";
import * as FontAwesome from "react-icons/lib/fa";

const DeleteItem = ({  deleteItem, itemId, onDelete }) => {
  const removeItem = async () => {
    console.log(' delete ', deleteItem, itemId, onDelete )
    try {
      await deleteItem(itemId);
      onDelete(); // callback
    } catch (err) {
      // Handle the error
      alert(JSON.stringify(err));
    }
  };

  return (
    <button className="btn btn-outline-primary" onClick={removeItem}>
      <FontAwesome.FaTimesCircle />
    </button>
  );
};
export default DeleteItem;
