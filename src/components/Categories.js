import React, { Component } from 'react';
import Category from './Category'

class Categories extends React.Component {


  render() {
    console.log('Categories Props', this.props)
      return (
        <div>
          <ul className='categories'>
            {this.props.categories.map((category) => (

              <Category key = {category.name} category={category} sortBy={this.props.onSortPostsByCategory}/>

            ))}
          </ul>
          </div>
      )
    }
}
export default Categories
