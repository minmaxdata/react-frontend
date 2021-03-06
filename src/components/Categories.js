import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getCategories } from "../actions/categories";
import Category from "./Category";

class Categories extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    return (
      <div className="nav">
        <NavLink activeClassName="active" to="/">
          {" "}
          <h3 className="header">Readable</h3>
        </NavLink>
        <div>
          <ul className="categories">
            <li>
              <NavLink activeClassName="active" className="btn" to="/create">
                Add a Post
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" className="btn" to="/">
                All Posts
              </NavLink>
            </li>
            {this.props.categories.map(category => (
              <Category key={category.name} category={category} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories
  };
}
export default connect(
  mapStateToProps,
  { getCategories }
)(Categories);
