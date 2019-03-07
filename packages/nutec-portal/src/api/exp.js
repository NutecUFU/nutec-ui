import BaseApi from './base'

const api = new BaseApi()

class Exp {
  static getAll(){
    return api.request('experiment')
  }
}

export default Exp