import React from 'react'
import ReactDOM from 'react-dom'
import { Component } from 'react'
import Todo from './todo'

class TodoList extends Component{
  render(){
    return (
      <div>
        <Todo />
        <Todo />
      </div>
    )
  }

}

module.exports = TodoList
