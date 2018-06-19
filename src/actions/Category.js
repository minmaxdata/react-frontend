import React from "react";
import { Link } from "react-router-dom";
import { capitalize } from "../utils/helpers";

const Category = ({ category }) => {
  const name = capitalize(`${category.name}`);
  return (
    <li className="category">
      <Link role="button" className="btn" to={`/${category.path}`}>
        {name} Posts
      </Link>
    </li>
  );
};
export default Category;
