import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Counter extends Component {
  constructor(){
    super()
    this.state = {
      counter: 0
    }

  }

  render (){
    return (
      <div>
        {this.state.counter}
      </div>
    )

  }

}
