import io from 'socket.io-client'
import { eventChannel } from 'redux-saga';
import { fork, take, call, put, cancel, all } from 'redux-saga/effects';
import { DashboardActions, DashboardTypes } from './action';

const connect = () => {
  const socket = io('http://localhost:5000')
  return new Promise(resolve => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}

const subscribe = (socket) => {
  return eventChannel(emit => {
    socket.on('user_list', (users) => {
      emit(DashboardActions.listUser(users));
    })
    return () => {};
  });
}

function* getUsers(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* addUser(socket) {
  while (true) {
    const user = yield take(DashboardActions.addUser)
    socket.emit('user_join', user)
  }
}


function* handleIO() {
  while(true) {
    const socket = yield call(connect)
    yield fork(getUsers, socket)
  }
}

export default function* root(){
  yield all([
    fork(handleIO)
  ])
}