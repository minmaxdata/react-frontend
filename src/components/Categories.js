import React, { Component } from 'react';
import {
  Route
} from 'react-router-dom';
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
    this.setState({ categories: initialCategories})
  }


  render() {
      return (
        <div>
          <ul className='categories'>
          Hello Categories

          </ul>

          </div>
      )
    }
}
export default Categories
