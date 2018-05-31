import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Modal from 'react-modal'
import Loading from 'react-loading'

import Categories from '../components/Categories'
import Posts from '../components/Posts'
import CreatePost from '../components/CreatePost'


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

class App extends Component {
  state = {
    sortBy: 'all',
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
    //filter out deleted posts and sort by category
    this.setState({ categories: this.state.categories })
    this.setState({ posts: initialPosts })
  }
  componentWillReceiveProps(nextProps) {
      console.log('componentWillReceiveProps', nextProps)
  }
  render() {
    return (
      <div className="container">
        <div className='nav'>
           <h3 className='header'>Readable Posts Comments and Voting</h3>

           <Route path='/create' component={CreatePost}/>
           <div>{this.state.sortBy}</div>
           <Route path='/' render={(props) => (
             <Categories  categories = {this.state.categories}  onSortPostsByCategory = {this.sortPostsByCategory}/>
           )}/>
        </div>
        <div>
            <Route exact path='/' render={(props) => (
              <Posts {...props} posts = {this.state.posts} onDeletePost ={this.deletePost}/>
          )}/>

        </div>

      </div>
    );
  }
}

export default App;
