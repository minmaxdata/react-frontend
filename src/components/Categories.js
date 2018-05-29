import React, { Component } from 'react';
import Posts from './Posts'

import {
  Link,
  Route,
} from 'react-router-dom';

class Categories extends React.Component {
  render() {
      console.log('Categories Props', this.props)
      return (
        <div>
          <ul className='categories'>
            {this.props.categories.map((category) => (

              <li className='category'>
                <Link to={category.path}>{category.name}</Link>
              </li>

            ))}
          </ul>
          <Route path="/:id" component={Posts}/>
          </div>
      )
    }
}
export default Categories
