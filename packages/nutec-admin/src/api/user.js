import BaseApi from './base'

const api = new BaseApi()

class User {
  static create(data) {
    return api.request(`v1/users/`, {method: 'post', data})
  }
  static getAll() {
    return api.request(`v1/users`)
  }
  static getUser(id){
    return api.request(`v1/user/${id}`)
  }
  static delete(id) {
    return api.request(`v1/user/${id}`, {method: 'delete'})
  }
  static alter(id, data) {
    return api.request(`v1/user/${id}`, {method: 'put', data})
  }
}

export default User
