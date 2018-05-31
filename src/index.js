import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
//import reducer from './reducers'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import 'normalize.css'
=======
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import combinedReducers from "./reducers";
import App from './components/App'
>>>>>>> d5b9eeb7613231bbdaa697429b0deba2f1a0bc58

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

// const middleware = [ thunk ]
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger())
// }
//
// const store = createStore(
//   reducer,
//   applyMiddleware(...middleware)
// )


ReactDOM.render(
<<<<<<< HEAD

    <BrowserRouter><App /></BrowserRouter>,

  document.getElementById('root')
=======
  // Wrap <App> component in Provider for global access to the store
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
>>>>>>> d5b9eeb7613231bbdaa697429b0deba2f1a0bc58
);
