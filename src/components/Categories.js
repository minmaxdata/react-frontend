import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";
import * as ReadableAPI from "../utils/api";
import Category from "./Category";

class Categories extends React.Component {
  state = {
    sortBy: "All",
    categories: []
  };

  componentDidMount() {
    ReadableAPI.getCategories().then(response => {
      this.setState({ categories: response["categories"] });
    }).catch(reason => console.error(reason));
  }

  render() {
    return (
      <div>
        <ul className="categories">
          <li>
            <NavLink activeClassName="active" className='btn' to="/create">Add a Post</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active"  className='btn' to="/">All Posts</NavLink>
          </li>
          {this.state.categories.map(category => (
            <Category key={category.name} category={category} />
          ))}
        </ul>
      </div>
    );
  }
}
export default Categories;
