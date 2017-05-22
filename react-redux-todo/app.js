import {
  createStore,
  combineReducers
} from 'redux'

import todoReducer from './reducers/todoReducer'


export let store = createStore(todoReducer)

store.subscribe(()=>{
  console.log("hello")
})
