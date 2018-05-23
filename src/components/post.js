import React, { Component } from 'react';


class Post extends React.Component {
  render() {
      console.log('Post Props', this.props)
      return (
        <li className='post'>
            {this.props.items.title}
        </li>
      )
    }

}
export default Post
