import {
  createStore,
  combineReducers
} from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './components/todolist'
import { Provider } from 'react-redux'
import todoReducer from './reducers/todoReducer'


const store = createStore(todoReducer)

store.subscribe(()=>{
  console.log("hello")
})


ReactDOM.render(
  <Provider store = { store }>
    <TodoList />
  </Provider>, document.getElementById('app'))
