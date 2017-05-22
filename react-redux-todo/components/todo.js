import React, { Component } from 'react'

export default class Todo extends Component{
  constructor(props){
    super(props)
    this.state = {
      text: ""
    }
  }
  _onClick(){
    this.props.addTodo(this.state.text)
  }
  render(){
    return (
      <div>
        {this.props.todos.map(function(todo, index){
          return (
            <div key = { index }>
              {todo.title} - Finished: {todo.finished.toString()}
            </div>
          )
        })}
        <input value = {this.state.text} onChange = {(e) => this.setState({text: e.target.value})}></input>
        <div onClick = {this._onClick.bind(this)}>
          [Add to do]
        </div>
      </div>

    )
  }

}

module.exports = Todo
