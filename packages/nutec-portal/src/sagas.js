import { all, fork } from 'redux-saga/effects'

import applicationSaga from './state/application/application-saga'
import teamSaga from './state/team/team-saga'
import expSaga from './state/exp/exp-saga'
import contactSaga from './state/contact/contact-saga'
import toasterSaga from './state/toaster/toaster-saga'

function* sagas() {
  yield all([
    fork(applicationSaga),
    fork(teamSaga),
    fork(expSaga),
    fork(contactSaga),
    fork(toasterSaga)
  ])
}

export default sagas
