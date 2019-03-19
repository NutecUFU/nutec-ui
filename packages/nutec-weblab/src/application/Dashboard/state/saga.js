import { takeEvery, call, put, all, select } from 'redux-saga/effects'
import { useSocket } from 'core/providers/base'
import { DashboardTypes, DashboardActions } from './action'

const socket = useSocket('http://localhost:4000')

export function* userJoin(user) {
  try {
    yield call(socket.emit('user_join', {name: 'Maycon', control: false, isMaestro: false}))
    while (true) {
      socket.on('user_list', list => 
        put(DashboardActions.userList(list))
      )
    }
    
    console.log('user joined')
  } catch (error) {
    console.error(error)
  }
}

export default function* root() {
  yield all([
    takeEvery(DashboardTypes.USER_JOIN, userJoin),
  ])
}