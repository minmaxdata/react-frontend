import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Category extends React.Component {
  render() {
      console.log('category Props', this.props)
      return (
        <li className='category'>
          <Link to={this.props.category.path}>{this.props.category.name}</Link>
        </li>
      )
    }

}
export default Category
