import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as FontAwesome from 'react-icons/lib/fa'
import Post from './Post'

const initialPosts = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'udacity',
    voteScore: 6,
    deleted: false,
    commentCount: 2
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn React in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'react',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  },
  "6ni0123ym7mf1p33lnez": {
    id: '6ni0123ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 20 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  },
  "6ni456ym7mf1p33lnez": {
    id: '6ni456ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn React in 30 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'react',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  },
  "6ni7893ym7mf1p33lnez": {
    id: '6ni7893ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 40 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  },
}

class Posts extends React.Component {

  sortPostsByCategory = (category) => {
    console.log('sortPostsByCategory ', category);
    this.setState({sortBy: category})
    const newObj = {};
    Object.keys(initialPosts).map((post) => {
      if(initialPosts[post]['category'] === category) {
        newObj[post] = initialPosts[post]
      }
    })
    console.log('newObj', newObj)
    this.setState({posts: newObj})

  }
  sortPostsByDeleted = () => {
    console.log('sortPostsByDeleted ');
  }
  deletePost = (id) => {
    this.setState({
      posts: {
      ...this.state.posts,
      [id] : {
        ...this.state.posts[id],
        deleted: true
        }
      }
    })
  }
  addPost = () => {

  }


    componentDidMount() {
      console.log(initialPosts)
      this.setState({ posts: initialPosts })
    }

  render() {
        return (
        <div>


          <ul className = ''>
          Hello Posts
          </ul>
        </div>
      )
    }

}
export default Posts
