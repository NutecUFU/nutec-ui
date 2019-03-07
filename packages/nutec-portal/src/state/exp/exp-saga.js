import { put, call, takeEvery, all } from 'redux-saga/effects'
import { types, actions } from './exp-actions'
import ExpApi from '../../api/exp'

import { actions as toasterActions } from '../toaster/toaster-actions'

export function* getAllExp(){
  try {
    const exps = yield call([ExpApi, ExpApi.getAll])
    yield put(actions.getAllExpSuccess(exps))
  } catch (e) {
    yield put(toasterActions.addToast('error', 'Não foi possível recuperar os experimentos! :('))
  }
} 

export default function* root(){
  yield all([
    takeEvery(types.GET_ALL_EXP, getAllExp)
  ])
}