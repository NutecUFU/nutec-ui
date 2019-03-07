import { put, call, takeEvery, all } from 'redux-saga/effects'
import { types, actions } from './application-actions'
import ApplicationApi from '../../api/application'

import { actions as toasterActions } from '../toaster/toaster-actions'

export function* getPartners(){
  try {
    const partners = yield call([ApplicationApi, ApplicationApi.getPartners])
    yield put(actions.getPartnersSuccess(partners))
  } catch (e) {
    yield put(toasterActions.addToast('error', 'Ocorreu algum erro ao recuperar os parceiros! :('))
  }
}

export default function* root(){
  yield all([
    takeEvery(types.GET_PARTNERS, getPartners)
  ])
}