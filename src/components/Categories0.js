import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
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
            <Link to="/create">Add a Post</Link>
          </li>
          <li>
            <Link to="/">All Posts</Link>
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
