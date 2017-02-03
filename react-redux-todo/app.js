import {
  createStore,
  combineReducers
} from 'redux'

let initialState = {
  todos: []
}

function todo(state = initialState, action){
  switch(action.type){
    case "ADD_TODO": {

    },
    case "TOGGLE_TODO": {

    }
  }
}

let store = createStore(todo)
