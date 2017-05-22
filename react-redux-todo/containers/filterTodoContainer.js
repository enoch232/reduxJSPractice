import React from 'react'
import { connect } from 'react-redux'
import Todo from '../components/todo'

const mapStateToProps = (state) => {
  return {
    todos: "hello!@!"
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: () => {
      dispatch({ type: "TOGGLE_TODO" })
    },

    addTodo: () => {
      dispatch({ type : "ADD_TODO"})
    }
  }

}

const filterTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

module.exports = filterTodo
