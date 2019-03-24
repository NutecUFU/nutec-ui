import Immutable from 'seamless-immutable'
import { createReducer } from 'core/utils/redux'
import { types } from 'state/scheduling/scheduling-actions'

const INITIAL_STATE = Immutable({})

const toggleModal = (state, action) => {
  return state.merge({
    modal: !state.modal,
    schedule: action.schedule
  })
}

const createScheduleModal = (state, action) => {
  return state.merge({
    createModal: !state.createModal,
    slot: action.slot
  })
}

const getSchedulesSuccess = (state, action) => {
  return state.merge({list: action.schedules})
}

const getScheduleSuccess = (state, action) => {
  return state.merge({schedule: action.schedule})
}

const deleteScheduleSuccess = (state, action) => {
  return state.merge({schedule: null})
}

const reducer = createReducer(INITIAL_STATE, {
  [types.SCHEDULING_TOGGLE_MODAL]: toggleModal,
  [types.CREATE_SCHEDULE_MODAL]: createScheduleModal,
  [types.GET_SCHEDULES_SUCCESS]: getSchedulesSuccess,
  [types.GET_SCHEDULE_SUCCESS]: getScheduleSuccess,
  [types.DELETE_SCHEDULE_SUCCESS]: deleteScheduleSuccess
})

export default reducer
