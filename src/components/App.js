import React, { Component } from 'react';
import { getCategories } from '../utils/api'
import '../App.css';

class App extends Component {
  state = {
      categories:[]
  }

  render() {
    getCategories().then(function(result) {
      result.categories.map(category =>
          console.log('category ', category.name)
      )
    }, function(err) {
      console.log(err); // Error: "It broke"
    });

    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
