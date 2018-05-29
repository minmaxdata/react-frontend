import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as FontAwesome from 'react-icons/lib/fa'
import Post from './Post'


class Posts extends React.Component {

  render() {
      console.log('Posts Props', this.props.posts)
      return (
        <div>
          <Link
           to='/create'>
           Add Post
            <FontAwesome.FaPlusCircle/>
          </Link>

          <ul className = ''>
          {Object.keys(this.props.posts).map((post) => (
             <Post key={post} post={this.props.posts[post]} onDeletePost={this.props.onDeletePost}/>
           ))
         }
          </ul>
        </div>
      )
    }

}
export default Posts
