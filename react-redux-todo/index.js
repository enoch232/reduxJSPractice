import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './components/todolist'
import { Provider } from 'react-redux'
import { store } from './app'

ReactDOM.render(<Provider store = { store }><TodoList /></Provider>, document.getElementById('app'))
