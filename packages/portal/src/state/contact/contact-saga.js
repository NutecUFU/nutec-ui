import { put, call, takeEvery, all } from 'redux-saga/effects'
import { types, actions } from './contact-actions'
import ContactApi from '../../api/contact'

import { actions as toasterActions } from '../toaster/toaster-actions'

export function* createContact(action){
  try {
    yield call([ContactApi, ContactApi.create], action.data)
    yield put(actions.createContactSuccess())
    yield put(toasterActions.addToast('success', 'Contato realizado com sucesso! :)'))
  } catch (e) {
    yield put(toasterActions.addToast('error', 'Ocorreu algum erro ao conectar com o Servidor! :( Tente novamente mais tarde'))
  }
}

export default function* root(){
  yield all([
    takeEvery(types.CREATE_CONTACT, createContact)
  ])
}