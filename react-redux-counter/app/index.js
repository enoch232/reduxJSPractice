import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/counter'
import { createStore, Provider } from 'redux'
import counterReducer from './reducers/counterReducer'
let store = createStore(counterReducer)

ReactDOM.render(<Provider store = {store}><Counter /></Provider>, document.getElementById('app'))
