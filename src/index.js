import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'normalize.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
//import { createStore, applyMiddleware, compose } from 'redux'
//import reducer from './reducers'
//import { Provider } from 'react-redux'


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
