import { all, fork } from 'redux-saga/effects'
import landingSaga from './application/Landing/state/saga'
import dashboardSaga from './application/Dashboard/state/saga'

function* sagas() {
  yield all([
    fork(landingSaga),
    fork(dashboardSaga)
  ])
}

export default sagas
