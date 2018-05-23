import React, { Component } from 'react';
import Post from './Post'


class Posts extends React.Component {
  render() {
      console.log('Posts Props', this.props.posts)
      return (
        <ol className='posts'>
        {
          Object.keys(this.props.posts).map(post => (
            <Post key={post} items={this.props.posts[post]} />
            ))
        }
        </ol>
      )
    }

}
export default Posts
