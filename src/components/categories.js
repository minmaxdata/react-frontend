import React, { Component } from 'react';
import Category from './Category'


class Categories extends React.Component {
  render() {
      console.log('Categories Props', this.props)
      return (
        <ol className='categories'>
          {this.props.categories.map((category) => (
            <Category key = {category.name} category={category} />
          ))}
        </ol>
      )
    }

}
export default Categories
