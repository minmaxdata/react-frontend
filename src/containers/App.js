import React, { Component } from "react";
import { Route , Switch } from "react-router-dom";
import Modal from "react-modal";
import Loading from "react-loading";

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
          <h3 className="header">Readable Posts Comments and Voting</h3>
          <Categories />
        </div>
        <div>
        <Switch>
          <Route path="/create" component={CreatePost} />
          <Route exact path="/" component={Posts} />
          <Route exact path="/:category/:id" component={PostDetail} />
        </Switch>


        </div>
      </div>
    );
  }
}

export default App;
