export const types = {
  SCHEDULING_TOGGLE_MODAL: 'SCHEDULING_TOGGLE_MODAL',
  CREATE_SCHEDULE_MODAL: 'CREATE_SCHEDULE_MODAL',
  GET_SCHEDULES: 'GET_SCHEDULES',
  GET_SCHEDULES_SUCCESS: 'GET_SCHEDULES_SUCCESS',
  CREATE_SCHEDULE: 'CREATE_SCHEDULE',
  CREATE_SCHEDULE_SUCCESS: 'CREATE_SCHEDULE_SUCCESS',
  GET_SCHEDULE: 'GET_SCHEDULE',
  GET_SCHEDULE_SUCCESS: 'GET_SCHEDULE_SUCCESS',
  DELETE_SCHEDULE: 'DELETE_SCHEDULE',
  DELETE_SCHEDULE_SUCCESS: 'DELETE_SCHEDULE_SUCCESS'
}

export const actions = {
  schedulingToggleModal: () => ({type: types.SCHEDULING_TOGGLE_MODAL}),
  createScheduleModal: (slot) => ({type: types.CREATE_SCHEDULE_MODAL, slot}),
  createSchedule: (schedule) => ({type: types.CREATE_SCHEDULE, schedule}),
  createScheduleSuccess: () => ({type: types.CREATE_SCHEDULE_SUCCESS}),
  getSchedules: () => ({type: types.GET_SCHEDULES}),
  getSchedulesSuccess: (schedules) => ({type: types.GET_SCHEDULES_SUCCESS, schedules}),
  getSchedule: (id) => ({type: types.GET_SCHEDULE, id}),
  getScheduleSuccess: (schedule) => ({type: types.GET_SCHEDULE_SUCCESS, schedule}),
  deleteSchedule: (id) => ({type: types.DELETE_SCHEDULE, id}),
  deleteScheduleSuccess: () => ({type: types.DELETE_SCHEDULE_SUCCESS})
}
