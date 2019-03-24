import BaseApi from './base'

const api = new BaseApi()

class Auth {
  static checkAuth() {
    return api.request(`v1/auth/check`);
  }
  static verify(email) {
    return api.request(`v1/auth?email=${email}`);
  }
  static login(data) {
    return api.request(`v1/auth`, {method: 'post', data})
  }
}

export default Auth
