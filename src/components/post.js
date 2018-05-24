import React, { Component } from 'react';


class Post extends React.Component {
  render() {
      console.log('Post Props', this.props)
      return (
        <li className='post'>
          <div>
            {this.props.items.title}
          </div>
            <div> edit icon, vote icon, detele icon </div>
        </li>
      )
    }

}
export default Post
