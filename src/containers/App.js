import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Categories from "../components/Categories";
import Posts from "../components/Posts";
import CreatePost from "../components/CreatePost";
import PostDetail from "../components/PostDetail";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Categories />
        <Switch>
          <Route path="/create" component={CreatePost} />
          <Route exact path="/" component={Posts} />
          <Route exact path="/:category/:id" component={PostDetail} />
          <Route exact path="/:category/:id/edit" component={CreatePost} />
          <Route exact path="/:category" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default App;
