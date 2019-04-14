import { all, fork } from 'redux-saga/effects'
import landingSaga from './application/Landing/state/saga'

function* sagas() {
  yield all([
    fork(landingSaga),
  ])
}

export default sagas
