import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Categories from "../components/Categories";
import Posts from "../components/Posts";
import CreatePost from "../components/CreatePost";
import PostDetail from "../components/PostDetail";

class App extends Component {
  state = {
    sortBy: "All"
  };

  render() {
    return (
      <div className="container">
        <div className="nav">
          <h3 className="header">Readable</h3>
          <Categories />
        </div>
        <div>
          <Switch>
            <Route path="/create" component={CreatePost} />
            <Route exact path="/" component={Posts} />
            <Route exact path="/:category/:id" component={PostDetail} />
            <Route exact path="/:category/:id/edit" component={CreatePost} />
            <Route exact path="/:category" component={Posts} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
