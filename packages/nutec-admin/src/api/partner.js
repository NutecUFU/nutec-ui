import BaseApi from './base'

const api = new BaseApi()

class Partner {
  static getAll() {
    return api.request(`v1/partner`)
  }
  static create(data) {
    return api.request(`v1/partner`, {data, method: 'post'})
  }
  static getPartner(id){
    return api.request(`v1/partner/${id}`)
  }
  static delete(id){
    return api.request(`v1/partner/${id}`, {method: 'delete'})
  }
}

export default Partner