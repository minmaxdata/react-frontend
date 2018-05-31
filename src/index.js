import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import combinedReducers from "./reducers";
import App from './components/App'

// Use logger middleware to record Action results
const logger = store => next => action => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd(action.type);
  return result;
};

// Create the Redux Store with a single reducer.
// Enable Redux dev tools.
// Enable thunk middleware for async API calls
// Enable logger middleware for Redux action logging
const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  // Wrap <App> component in Provider for global access to the store
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
