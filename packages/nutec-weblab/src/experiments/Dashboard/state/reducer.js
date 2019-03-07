import createReducer from 'core/utils/redux'
import { DashboardTypes } from './action';

const initialState = {
  title: null,
}

const reducer = {
  [DashboardTypes.SET_NAME](state, { title }) {
    return {
      ...state,
      title
    }
  }
}

export default createReducer(initialState, reducer)
