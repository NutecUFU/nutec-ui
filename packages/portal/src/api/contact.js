import BaseApi from './base'

const api = new BaseApi()

class Contact {
  static create(data){
    return api.request('contact', { method: 'POST', data})
  }
}

export default Contact