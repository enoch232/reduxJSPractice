import React, { Component } from 'react'

export default class Todo extends Component{

  render(){
    return (
      <div>
        {this.props.todos.map(function(todo){
          return (
            <div>
              {todo.title}
            </div>
          )
        })}
      </div>

    )
  }

}

module.exports = Todo
