import BaseApi from './base'

const api = new BaseApi()

class Application {
  static getPartners(){
    return api.request(`partner`)
  }
}

export default Application