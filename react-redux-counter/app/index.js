import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './reducers/counterReducer'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
const logger = createLogger();
const store = createStore(
  counterReducer,
  applyMiddleware(thunk, promise, logger)
);
ReactDOM.render(<Provider store = {store}><Counter /></Provider>, document.getElementById('app'))
