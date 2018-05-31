import React, { Component } from 'react';
import {
  withRouter
} from 'react-router-dom';


class Category extends React.Component {
//
// updateSelectedCategory = () => {
//   console.log('updateSelectedCategory ', this.props.category.name);
//   this.props.sortBy(this.props.category.name);
//   this.props.history.push("/" + this.props.category.path);
// }
  render() {
    console.log('props ', this.props);
    const name = this.props.name;
    const path = this.props.path;

      return (
        <li className='category'>
        <button >
        {name}
        </button>

        </li>
      )
    }

}
export default withRouter(Category)
