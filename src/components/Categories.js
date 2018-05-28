import React, { Component } from 'react';
import Category from './Category'


class Categories extends React.Component {
  render() {
      console.log('Categories Props', this.props)
      return (
        <div>
        <ul className='categories'>
          {this.props.categories.map((category) => (
            <Category key = {category.name} category={category} onSortByCategory={this.props.sortPosts}/>
          ))}
        </ul>
        <Switch>
          <Route path={`${match.url}/:id(\\d+)`} component={Message} />
          <Route
            path={match.url}
            render={() => <h3>Please select a message</h3>}
          />
        </Switch>
        </div>
      )
    }

}
export default Categories
