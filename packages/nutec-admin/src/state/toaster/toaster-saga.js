import { put, all, takeEvery } from 'redux-saga/effects';
import { types, actions } from './toaster-action';

export function* toggleToast(typeToast, msg) {
  try {
    yield put(actions.addToast(typeToast, msg));
  } catch(e) {}
}

export default function* root() {
  yield all([
    takeEvery(types.TOGGLE_TOAST, toggleToast)
  ])
}
