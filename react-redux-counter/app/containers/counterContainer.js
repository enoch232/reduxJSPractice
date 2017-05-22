
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from '../actions/counterActions'
import Counter from '../containers/counter'

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
