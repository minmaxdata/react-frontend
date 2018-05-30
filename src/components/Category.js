import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';


class Category extends React.Component {

updateSelectedCategory = () => {
  console.log('updateSelectedCategory ', this.props.category.name);
  this.props.sortBy(this.props.category.name);
}
  render() {
    //console.log('props ', this.props);
      return (
        <li className='category'>
          <button  onClick={this.updateSelectedCategory} >
          {this.props.category.name}
          </button>
        </li>
      )
    }

}
export default Category
