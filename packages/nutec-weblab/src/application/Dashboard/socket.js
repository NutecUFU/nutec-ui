import baseSocket from 'core/api/baseSocket'

export const addUser = (name, control=false, isMaestro=false) => {
  baseSocket.emit('user_join', { name, control, isMaestro })
}

export const userJoined = (cb) => {
  baseSocket.on('user_added', cb)
} 

export const getUsers = (cb) => {
  baseSocket.on('user_list', cb)
}