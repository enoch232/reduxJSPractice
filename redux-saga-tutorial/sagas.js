import { delay } from'redux-saga'
import { all, takeEvery, put, call } from 'redux-saga/effects'

export function* helloSaga(){
  console.log("hello saga!")
}

export function* incrementAsync(){
  yield call(delay, 1000)
  yield put({type: "INCREMENT"})
}

export function* watchIncrementAsync(){
  yield takeEvery("ASYNC_INCREMENT", incrementAsync)
}

export function* rootSaga(){
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}
