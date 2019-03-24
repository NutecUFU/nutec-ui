import { put, call, takeEvery, all } from 'redux-saga/effects'
import { types, actions } from './scheduling-actions'
import { actions as toasterActions } from '../toaster/toaster-actions';
import ScheduleApi from 'api/schedule'

export function* getSchedules() {
  try{
    const schedules = yield call([ScheduleApi, ScheduleApi.getAll])
    yield put(actions.getSchedulesSuccess(schedules))
  } catch(e) {
    yield put(toasterActions.addToast('error', 'Não foi possível recuperar os eventos :('))
  }
}

export function* getSchedule(action) {
  try{
    const schedule = yield call([ScheduleApi, ScheduleApi.getSchedule], action.id)
    yield put(actions.getScheduleSuccess(schedule))
  } catch(e) {
    yield put(toasterActions.addToast('error', 'Não foi possível recuperar o evento :('))
  }
}

export function* createSchedule(action) {
  try {
    yield call([ScheduleApi, ScheduleApi.create], action.schedule)
    yield put(actions.createScheduleSuccess())
    yield call(getSchedules)
    yield put(actions.createScheduleModal())
    yield put(toasterActions.addToast('success', 'Evento cadastrado :)'));
  } catch (e) {
    yield put(toasterActions.addToast('error', 'Não foi possível cadastrar o evento :('))
  }
}

export function* deleteSchedule(action) {
  try {
    yield call([ScheduleApi, ScheduleApi.delete], action.id)
    yield call(getSchedules)
    yield put(actions.deleteScheduleSuccess())
    yield put(actions.schedulingToggleModal())
    yield put(toasterActions.addToast('success', 'Evento deletado :)'));
  } catch(e) {
    yield put(toasterActions.addToast('error', 'Não foi possível deletar o evento :('))
  }
}

export default function* root() {
  yield all([
    takeEvery(types.GET_SCHEDULES, getSchedules),
    takeEvery(types.CREATE_SCHEDULE, createSchedule),
    takeEvery(types.GET_SCHEDULE, getSchedule),
    takeEvery(types.DELETE_SCHEDULE, deleteSchedule)
  ])
}
