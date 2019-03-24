import BaseApi from './base'

const api = new BaseApi()

class Contact {
  static getAll(){
    return api.request(`v1/contact`)
  }

  static delete(id){
    return api.request(`v1/contact/${id}`, {method: 'DELETE'})
  }
}

export default Contact