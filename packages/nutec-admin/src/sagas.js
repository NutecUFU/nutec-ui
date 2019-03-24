import { all, fork } from 'redux-saga/effects'
import authSaga from 'state/auth/auth-saga'
import userSaga from 'state/user/user-saga'
import expSaga from 'state/exp/exp-saga'
import scheduleSaga from 'state/scheduling/scheduling-saga'
import feedbackSaga from 'state/feedback/feedback-saga'
import contactSaga from './state/contact/contact-saga'
import partnerSaga from './state/partner/partner-saga'
import profileSaga from './state/profile/profile-saga'

function* sagas() {
  yield all([
    fork(authSaga),
    fork(userSaga),
    fork(expSaga),
    fork(scheduleSaga),
    fork(feedbackSaga),
    fork(contactSaga),
    fork(partnerSaga),
    fork(profileSaga)
  ])
}

export default sagas
