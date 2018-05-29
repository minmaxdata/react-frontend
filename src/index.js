import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
//import { createStore, applyMiddleware, compose } from 'redux'
//import reducer from './reducers'
//import { Provider } from 'react-redux'
import './index.css'
import 'normalize.css'


ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
