import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import * as FontAwesome from "react-icons/lib/fa";
import * as ReadableAPI from "../utils/api";

class EditItem extends React.Component {
  state = {};

  editItem = () => {
    console.log(' edit item', this.props);
    this.props.history.push('/${this.props.location}/edit')
  };


  render() {
    return (
          <FontAwesome.FaEdit />
    );
  }
}
export default EditItem;
