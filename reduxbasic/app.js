// import { createStore } from 'redux'
var redux = require("redux")
createStore = redux.createStore

const reducer = function( state, action ){
  if (action.type === "INC"){
    return state + action.payload
  }
  if (action.type === "DEC"){
    return state - action.payload
  }
  return state
}

const store = createStore(reducer, 0)

store.subscribe(function(){
  console.log("state changed! the value is now", store.getState())
}.bind(this))

store.dispatch({type: "INC", payload: 5})
store.dispatch({type: "INC", payload: 7})
store.dispatch({type: "DEC", payload: 12})
