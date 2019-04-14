import { combineReducers } from 'redux'
import dashboard from './application/Dashboard/state/reducer'
import landing from './application/Landing/state/reducer'

const rootReducer = combineReducers({
  landing,
  dashboard
})

export default rootReducer
