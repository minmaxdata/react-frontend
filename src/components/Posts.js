import React, { Component } from 'react';
import * as ReadableAPI from "../utils/api";
import Post from './Post'


class Posts extends React.Component {
  state = {
    sortBy: 'all',
    posts: [],
  }


  componentDidMount() {

    ReadableAPI.getPosts().then(response => {
      this.setState({ posts: response})
    });

  }

  render() {
      return (
        <ul className=''>
        {  this.state.posts.map((post) => (
            <Post key={post.id} post={post} />
          ))

        }
        </ul>
      )
    }

}
export default Posts
