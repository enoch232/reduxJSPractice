initialState = {
  counter: 0
}



function counter(state = initialState, action){
  switch(action.type){
    case "INCREMENT": {
      return Object.assign({},state,:wq {counter + action.value})

    }
    case "DECREMENT": {
      return Object.assign({}, {counter - 1})
    }

  }

}

module.exports = counter
