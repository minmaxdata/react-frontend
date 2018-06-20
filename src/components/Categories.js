import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCategories } from "../actions/categories";
import Category from "./Category";

class Categories extends Component {
  static propTypes = {
    dispatchGetCategories: PropTypes.func,
    categories: PropTypes.array
  };

  componentDidMount() {
    console.log(' categories componentDidMount ', this.props)
    this.props.dispatchGetCategories();

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
          {this.props.categories.map(category => (
            <Category key={category.name} category={category} />
          ))}
        </ul>
      </div>
    );
  }
}
function mapStateToProps({categories}) {
  return {
    categories
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchGetCategories: () => {
      dispatch(getCategories());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
