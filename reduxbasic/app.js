import { createStore } from 'redux'

const reducer = function( state, action ){
}

const store = createStore(reducer, 0)

store.subscribe(function(){
  console.log("state changed!")
}

store.dispatch({type: "INC", value: 0})
