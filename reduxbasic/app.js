// import { createStore } from 'redux'
var redux = require("redux")
createStore = redux.createStore
combineReducers = redux.combineReducers


const userReducer = function( state = { name: "Enoch Ko", age: 40}, action){
  switch(action.type){
    case "CHANGE_NAME": {
      state.name = action.payload
      break
    }
    case "CHANGE_AGE": {
      state.age = action.payload
      break
    }
  }
  return state
}

const tweetsReducer = function( state = [], action){
  return state
}

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
})

const store = createStore(reducers)

store.subscribe(function(){
  console.log("state changed! the value is now", store.getState())
})

store.dispatch({type: "CHANGE_NAME", payload: "Jaemin Ko"})
