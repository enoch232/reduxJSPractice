import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/counter'
import { createStore, Provider, applyMiddleware } from 'redux'
import counterReducer from './reducers/counterReducer'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
const logger = createLogger();
const store = createStore(
  counterReducer,
  applyMiddleware(thunk, promise, logger)
);
ReactDOM.render(<Counter counter = {store}/>, document.getElementById('app'))
