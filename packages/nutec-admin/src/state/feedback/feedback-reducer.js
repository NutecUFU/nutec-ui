import Immutable from 'seamless-immutable'
import { createReducer } from 'core/utils/redux'
import { types } from 'state/feedback/feedback-actions'

const INITIAL_STATE = [];

const addFeedback = (state, action) => {
  return state.merge({loading: true})
}

const addFeedbackSuccess = (state, action) => {
  return state.merge({loading: false})
}

const reducer = createReducer([], {
  [types.ADD_FEEDBACK]: addFeedback,
  [types.ADD_FEEDBACK_SUCCESS]: addFeedbackSuccess
})

export default reducer
