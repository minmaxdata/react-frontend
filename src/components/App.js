import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Modal from 'react-modal'
import Loading from 'react-loading'

import Categories from './Categories'
import Posts from './Posts'


const posts = {
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

class App extends Component {
  state = {
    categories: [{
      name: 'react',
      path: 'react'
    },
    {
      name: 'redux',
      path: 'redux'
    },
    {
      name: 'udacity',
      path: 'udacity'
    }],
    posts: [],
}

  sortPostsByCategory = (category) => {
    console.log('sortPostsByCategory ', category);
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
    //filter out deleted posts
    //set up routing

    this.setState({ categories: this.state.categories })
    this.setState({ posts: posts })
  }

  render() {
    return (
      <div className="container">
        <div className='nav'>
           <h3 className='header'>Readable Posts Comments and Voting</h3>
           <button
             className='' onClick={this.addPost}>
               Add Post
           </button>
         </div>

          <Categories categories = {this.state.categories} sortPosts ={this.sortPostsByCategory} />
          <Posts posts = {this.state.posts} onDeletePost ={this.deletePost}/>
      </div>
    );
  }
}

export default App;
