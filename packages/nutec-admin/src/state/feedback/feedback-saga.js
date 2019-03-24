import { put, all, takeEvery } from 'redux-saga/effects';
import { types, actions } from './feedback-actions';
import { actions as toasterActions } from '../toaster/toaster-actions';

export function* createFeedback(action) {
  try {
    console.log('CREATE FEEDBACK')
  } catch (e) {
    yield put(toasterActions.addToast('error', 'Não foi possível cadastrar o feedback :('))
  }
}

export default function* root() {
  yield all([
    takeEvery(types.ADD_FEEDBACK, createFeedback)
  ])
}
