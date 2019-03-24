import { all, call, takeEvery, put } from 'redux-saga/effects'
import { types, actions } from './contact-actions'
import { actions as toasterActions } from '../toaster/toaster-actions'

import ContactApi from '../../api/contact'

export function* getAllContacts(){
  try {
    const contacts = yield call([ContactApi, ContactApi.getAll])
    yield put(actions.getAllContactsSuccess(contacts))
  } catch (e) {
    yield put(toasterActions.addToast('error', 'Não foi possível recuperar os contatos! :('))
  }
}

export function* deleteContact(action) {
  try {
    yield call([ContactApi, ContactApi.delete], action.id)
    yield put(actions.deleteContactSuccess())
    yield put(toasterActions.addToast('success', 'Contato deletado com sucesso! :)'))
    yield put(actions.getAllContacts())
  } catch (e) {
    yield put(toasterActions.addToast('error', 'Não foi possível deletar o contato! :('))
  }
}

export default function* root() {
  yield all([
    takeEvery(types.GET_ALL_CONTACTS, getAllContacts),
    takeEvery(types.DELETE_CONTACT, deleteContact)
  ])
}