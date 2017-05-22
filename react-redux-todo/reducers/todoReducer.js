
const initialState = {
  todos: [
    {
      id: 0,
      title: "Do homework",
      finished: false
    }
  ]
}

export default function todoReducer(state = initialState, action){
  switch(action.type){
    case "ADD_TODO": {
      console.log("add todo")
      return {todos: [...state.todos, { id: state.todos.length , title: action.text, finished: false }] }
    }
    case "TOGGLE_TODO": {
      let selected_todo;
      let other_todos = state.todos.filter(function(todo){
        if (todo.id != action.id){
          return true
        }else{
          selected_todo = todo
          return false
        }
      })
      if (selected_todo){
        return {todos: [...other_todos, { id: selected_todo.id, title: selected_todo.title, finished: !selected_todo.finished }] }
      }else{
        return state
      }


    }
    default: {
      return state
    }
  }
}
