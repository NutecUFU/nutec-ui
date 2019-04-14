import createReducer from 'core/utils/redux'
import { LandingTypes } from './action';

const initialState = {
  experiments: []
}

const reducer = {
  [LandingTypes.EXPERIMENTS_LOADED](state, { experiments }) {
    return {
      ...state,
      experiments
    }
  }
}

export default createReducer(initialState, reducer)
