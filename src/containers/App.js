import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Categories from "../components/Categories";
import Posts from "../components/Posts";
import CreatePost from "../components/CreatePost";
import PostDetail from "../components/PostDetail";
import GenericNotFound from "../components/GenericNotFound";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Categories />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/create" component={CreatePost} />
          <Route exact path="/:category/:id/edit" component={CreatePost} />
          <Route exact path="/:category/:id" component={PostDetail} />
          <Route exact path="/:category" component={Posts} />
          <Route path="*" component={GenericNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
