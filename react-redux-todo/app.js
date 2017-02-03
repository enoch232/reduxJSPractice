import {
  createStore,
  combineReducers
} from 'redux'

let initialState = {
  todos: [
    {
      title: "Do homework",
      finished: false
    }
  ]
}

function todo(state = initialState, action){
  switch(action.type){
    case "ADD_TODO": {
      return state
    }
    case "TOGGLE_TODO": {
      return state
    }
  }
}

export let store = createStore(todo)

store.subscribe(()=>{
  console.log("hello")
})
