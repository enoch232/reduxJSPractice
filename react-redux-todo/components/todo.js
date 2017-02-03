import React, { Component } from 'react'

export default class Todo extends Component{

  render(){
    return (
      <div onClick = {()=>this.props.toggleTodo()}>
        This
      </div>
    )
  }

}

module.exports = Todo
