import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';
import * as ReadableAPI from "../utils/api";
import Category from './Category'

const initialCategories = [
  {
  name: 'react',
  path: 'react'
},
{
  name: 'redux',
  path: 'redux'
},
{
  name: 'udacity',
  path: 'udacity'
}]

class Categories extends React.Component {
  state = {
    sortBy: 'all',
    categories: [],
  }

  componentDidMount() {

    ReadableAPI.getCategories().then(response => {
      console.log(' categories', response['categories']);
      this.setState({ categories: response['categories']})
    });

  }



  render() {
      return (
        <div>
          <ul className='categories'>
          {this.state.categories.map((category) => (

              <Category key = {category.name} category={category} sortBy={this.state.onSortPostsByCategory}/>

            ))}

          </ul>

          </div>
      )
    }
}
export default Categories
