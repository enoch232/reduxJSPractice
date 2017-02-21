const initialState = {
  counter: 0
}

function counter(state = initialState, action){
  switch(action.type){
    case "INCREMENT": {
      return Object.assign({}, {counter: state.counter + action.value})

    }
    case "DECREMENT": {
      return Object.assign({}, {counter: state.counter - action.value})
    }
    default:
      return Object.assign({}, {counter: state.counter})

  }

}

export default counter
