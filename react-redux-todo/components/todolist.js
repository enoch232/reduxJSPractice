import React from 'react'
import ReactDOM from 'react-dom'
import { Component } from 'react'
import FilterTodo from '../containers/filterTodo'

class TodoList extends Component{
  render(){
    return (
      <div>
      
        <FilterTodo />
      </div>
    )
  }

}

module.exports = TodoList
