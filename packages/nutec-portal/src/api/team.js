import BaseApi from './base'

const api = new BaseApi()

class Team {
  static getAll() {
    return api.request(`user/team`)
  }
}

export default Team