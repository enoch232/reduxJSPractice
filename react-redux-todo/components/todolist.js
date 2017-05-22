import React from 'react'
import ReactDOM from 'react-dom'
import { Component } from 'react'
import FilterTodo from '../containers/filterTodoContainer'
import Header from '../components/header'
import Footer from '../components/footer'
class TodoList extends Component {
  render(){
    return (
      <div>
        <Header></Header>
        <FilterTodo />
        <Footer></Footer>
      </div>
    )
  }

}

module.exports = TodoList
