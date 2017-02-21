import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from '../actions/counterActions.js'
export default class Counter extends Component {
  render (){
    return (
      <div>
        {this.props.counter.getState().counter}
        <div onClick = {()=> this.props.counter.dispatch(incrementCounter(1))}>
          Inc
        </div>
        <div onClick = {()=> this.props.counter.dispatch(decrementCounter(1))}>
          Dec
        </div>
      </div>
    )

  }

}
//
// let mapStateToProps = (state) => {
//   return {
//     counter: 10
//   }
// }
// let mapDispatchToProps = (dispatch) => {
//   return {
//     onIncrementClick: (value) => {
//       dispatch(incrementCounter(value))
//     }
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
