import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Modal from 'react-modal'
import Loading from 'react-loading'

import Categories from './Categories'
import Posts from './Posts'

const categories = [{
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
}];

const posts = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false,
    commentCount: 2
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  }
}

class App extends Component {
  state = {
      posts: posts,
      categories: categories,
  }

  componentDidMount() {
    this.setState({ categories })
    this.setState({ posts })
  }

  sortPostsByCategory(category) {
    console.log('sortPostsByCategory ', category);
  }

  render() {
    return (
      <div className="container">
        <div className='nav'>
           <h3 className='header'>Readable Posts Comments and Voting</h3>
           <button
             className='' onClick=''>
               Add Post
           </button>
         </div>

          <Categories categories = {this.state.categories} sorted ='sortPostsByCategory' />
          <Posts posts = {this.state.posts}/>
      </div>
    );
  }
}

export default App;
