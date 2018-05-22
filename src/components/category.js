import React, { Component } from 'react';


class Category extends React.Component {
  render() {
      console.log('category Props', this.props)
      return (
        <li className='category'>
          {this.props.category.name}
        </li>
      )
    }

}
export default Category
