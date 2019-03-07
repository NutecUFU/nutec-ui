import { combineReducers } from 'redux'
import applicationReducer from './state/application/application-reducer'
import teamReducer from './state/team/team-reducer'
import expReducer from './state/exp/exp-reducer'
import contactReducer from './state/contact/contact-reducer'
import toasterReducer from './state/toaster/toaster-reducer'

const rootReducer = combineReducers({
  application: applicationReducer,
  team: teamReducer,
  exp: expReducer,
  contact: contactReducer,
  toaster: toasterReducer
});

export default rootReducer
