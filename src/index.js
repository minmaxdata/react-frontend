import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import App from './containers/App'
import './index.css'
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(

    <BrowserRouter><App /></BrowserRouter>,

  document.getElementById('root')
);
