import React, { Component } from 'react';


class Category extends React.Component {
  render() {
      console.log('category Props', this.props)
      return (
        <li className='category'>
          <a onClick={() => this.props.onSortByCategory(this.props.category.path)}>{this.props.category.name}</a>
        </li>
      )
    }

}
export default Category
