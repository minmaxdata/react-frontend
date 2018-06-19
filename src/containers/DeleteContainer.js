import React, { Component } from "react";
import * as FontAwesome from "react-icons/lib/fa";
import DeletItem from '../components/DeleteItem'
class DeleteItem extends Component {
  deleteItem = async () => {
    const { deleteItem, itemId, onDelete } = this.props;
    try {
      await this.props.deleteItem(itemId);
      this.props.onDelete(); // callback
    } catch (err) {
      // Handle the error
      alert(JSON.stringify(err));
    }
  };

  render() {
    return (
      <button className="btn btn-outline-primary" onClick={this.deleteItem}>
        <FontAwesome.FaTimesCircle />
      </button>
    );
  }
}
export default DeleteItem;
