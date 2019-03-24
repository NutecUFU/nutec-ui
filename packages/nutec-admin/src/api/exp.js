import BaseApi from './base'

const api = new BaseApi()

class Exp {
  static getAll() {
    return api.request(`v1/experiment`)
  }
  static create(data) {
    return api.request(`v1/experiment`, {data, method: 'post'})
  }
  static getExp(id){
    return api.request(`v1/experiment/${id}`)
  }
  static delete(id){
    return api.request(`v1/experiment/${id}`, {method: 'delete'})
  }
}

export default Exp
