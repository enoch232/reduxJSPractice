import React from 'react'
import { connect } from 'react-redux'
import Todo from '../components/todo'
import { toggleTodoAction, addTodoAction } from '../actions/todoAction'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => {
      dispatch(toggleTodoAction(id))
    },

    addTodo: (text) => {
      dispatch(addTodoAction(text))
    }
  }

}

const filterTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

module.exports = filterTodo
