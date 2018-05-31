import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Categories from './Categories'
import Posts from './Posts'
import CreatePost from './CreatePost'




class App extends Component {

    render() {
    return (
      <div className="container">
        <div className='nav'>
           <h3 className='header'>Readable Posts Comments and Voting</h3>
           <Categories/>
        </div>
           <Switch>
             <Route path='/create' component={CreatePost}/>
             <Route exact path="/" component={Posts} />
             <Route exact path="/:category/" component={Posts} />
            </Switch>
        </div>
    );
  }
}

export default App;
