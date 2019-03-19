import { all, fork } from 'redux-saga/effects'
import dashboardSaga from 'application/Dashboard/state/saga'

function* sagas() {
  yield all([
    fork(dashboardSaga)
  ])
}

export default sagas
