import React, { Component } from 'react';
import Category from './Category'

import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

class Categories extends React.Component {
  render() {
      console.log('Categories Props', this.props)
      return (
        <ul className='categories'>
          {this.props.categories.map((category) => (
              <Switch>
                <Category key = {category.name} category={category} />
                <Route {...category} path={`${category.path}/:id(\\d+)`} component={Category}/>
            </Switch>
          ))}
        </ul>
      )
    }
}
export default Categories
