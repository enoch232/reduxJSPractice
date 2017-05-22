import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
export default class Counter extends Component {
  render (){
    return (
      <div>
        {this.props.counter}
        <div onClick = {()=>this.props.onIncrementClick(1)}>
          Inc
        </div>
        <div onClick = {()=>this.props.onDecrementClick(1)}>
          Dec
        </div>
      </div>
    )

  }

}
