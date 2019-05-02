import io from 'socket.io-client'

const socket = io('http://localhost:4000')

const baseSocket = {
  on(title, cb) {
    socket.on(title, cb)
  },
  emit(title, data) {
    socket.emit(title, data)
  }
}

export default baseSocket