import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from '../actions/counterActions'
class Counter extends Component {
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
//
let mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onIncrementClick: (value) => {
      dispatch(incrementCounter(value))
    },
    onDecrementClick: (value) => {
      dispatch(decrementCounter(value))
    }
  }
}
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)
export default CounterContainer
