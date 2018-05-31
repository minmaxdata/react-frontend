import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
//import reducer from './reducers'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import 'normalize.css'


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

    <BrowserRouter><App /></BrowserRouter>,

  document.getElementById('root')
);
registerServiceWorker();
