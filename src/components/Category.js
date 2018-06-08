import React, { Component } from "react";
import { Link } from "react-router-dom";
import { capitalize } from "../utils/helpers";

class Category extends React.Component {
  render() {
    //console.log("props ", this.props);
    const category = capitalize(`${this.props.category.name}`);
    return (
      <li className="category">
        <Link to={this.props.category.path}>
          {category} Posts
        </Link>
      </li>
    );
  }
}
export default Category;
