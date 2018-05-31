import React, { Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa'

class Post extends React.Component {
  render() {
    console.log('Post ', this.props)
      return (
        <li className='post'>
              <div>
                {this.props.post.title}
              </div>
              <div>
                  <button><FontAwesome.FaEdit /></button>
                  <button onClick={() => this.props.onDeletePost(this.props.post.id)} ><FontAwesome.FaTimesCircle /></button>
              </div>
          </li>
      )
    }

}
export default Post
