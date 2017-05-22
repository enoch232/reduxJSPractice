
let initialState = {
  todos: [
    {
      title: "Do homework",
      finished: false
    }
  ]
}

export default function todo(state = initialState, action){
  switch(action.type){
    case "ADD_TODO": {
      return state
    }
    case "TOGGLE_TODO": {
      return state
    }
  }
}
