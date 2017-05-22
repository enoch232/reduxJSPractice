import React from 'react'
import { connect } from 'react-redux'
import Todo from '../components/todo'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => {
      dispatch({ type: "TOGGLE_TODO", id: id })
    },

    addTodo: (text) => {
      dispatch({ type : "ADD_TODO", text: text })
    }
  }

}

const filterTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

module.exports = filterTodo
