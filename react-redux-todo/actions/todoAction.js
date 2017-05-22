import { ADD_TODO, TOGGLE_TODO } from './actionTypes'

export const addTodoAction = (text) => {
  return {
    type : ADD_TODO,
    text: text
  }
}

export const toggleTodoAction = (id) => {
  return {
    type: TOGGLE_TODO,
    id: id
  }
}
