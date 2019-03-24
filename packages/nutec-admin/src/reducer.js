import { combineReducers } from 'redux'
import applicationReducer from 'state/application/application-reducer'
import userReducer from 'state/user/user-reducer'
import expReducer from 'state/exp/exp-reducer'
import authReducer from 'state/auth/auth-reducer'
import toasterReducer from 'state/toaster/toaster-reducer'
import schedulingReducer from 'state/scheduling/scheduling-reducer'
import feedbackReducer from 'state/feedback/feedback-reducer'
import contactReducer from './state/contact/contact-reducer'
import partnerReducer from './state/partner/partner-reducer'
import profileReducer from './state/profile/profile-reducer'

const rootReducer = combineReducers({
  application: applicationReducer,
  user: userReducer,
  exp: expReducer,
  auth: authReducer,
  toaster: toasterReducer,
  scheduling: schedulingReducer,
  feedback: feedbackReducer,
  contact: contactReducer,
  partner: partnerReducer,
  profile: profileReducer
});

export default rootReducer
