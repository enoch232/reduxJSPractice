
const initialState = {
  todos: [
    {
      title: "Do homework",
      finished: false
    }
  ]
}

export default function todoReducer(state = initialState, action){
  switch(action.type){
    case "ADD_TODO": {
      console.log("add todo")
      return {todos: [...state.todos, { title: action.text, finished: false }] }
    }
    case "TOGGLE_TODO": {
      return state
    }
    default: {
      return state
    }
  }
}
