import baseSocket from 'core/api/baseSocket'

export const addUser = (name='', control=false, isMaestro=false, isSchedule=false) => {
  baseSocket.emit('user.join', { name, control, isMaestro, isSchedule})
}

export const userJoined = (cb) => {
  baseSocket.on('user.added', cb)
} 

export const getUsers = (cb) => {
  baseSocket.on('user.list', cb)
}