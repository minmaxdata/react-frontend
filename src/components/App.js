import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Categories from "./Categories";
import Posts from "./Posts";
import CreatePost from "./CreatePost";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="nav">
          <h3 className="header">Readable</h3>
          <h4> Posts Comments and Voting</h4>
          <Categories />
        </div>
        <Switch>
          <Route exact path="/create" component={props => <CreatePost {...props} />} />
          <Route exact path="/" component={props => <Posts {...props} />} />
          <Route exact path="/:category" component={props => <Posts {...props} />} />
          <Route exact path="/:category/:id" component={props => <PostDetail {...props} />} />
          <Route path="/:category/:id/edit" component={props => <CreatePost {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
