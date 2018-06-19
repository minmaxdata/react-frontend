import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import combinedReducers from "./reducers";
import { createLogger } from "redux-logger";
import App from "./containers/App";
import "./index.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";

const logger = store => next => action => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd(action.type);
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
