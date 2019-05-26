import baseSocket from 'core/api/baseSocket'

export const getUsers = (cb) => {
  baseSocket.on('user.list', cb)
}

export const endTime = (id) => {
  baseSocket.emit('user.end_time', id)
}