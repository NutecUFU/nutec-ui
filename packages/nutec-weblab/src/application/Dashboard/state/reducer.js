import createReducer from 'core/utils/redux'
import { DashboardTypes } from './action';

const initialState = {
  title: null,
  timer: false,
  status: false,
  user: null,
}

const reducer = {
  [DashboardTypes.SET_NAME](state, { title }) {
    return {
      ...state,
      title
    }
  },
  [DashboardTypes.ACTIVE](state, { status }) {
    return {
      ...state,
      status
    }
  },
  [DashboardTypes.SET_USER](state, { user }) {
    return {
      ...state,
      user
    }
  },
}

export default createReducer(initialState, reducer)
