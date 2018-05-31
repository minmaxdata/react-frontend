import React, { Component } from 'react';
import Post from './Post'


class Posts extends React.Component {
  render() {
      console.log('Posts Props', this.props.posts)
      return (
        <ul className='posts'>
        {
          Object.keys(this.props.posts).map(post => (
            <Post key={post} post={this.props.posts[post]} />
            ))
        }
        </ul>
      )
    }

}
export default Posts
