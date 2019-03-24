import axios from 'axios'
import defaultsDeep from 'lodash/defaultsDeep'
import { onResponseError } from './intercept'
import { getToken } from 'core/utils/auth'

// http://nutecrexlab1.ufu.br/api
// http://localhost:5000/api

const ENVIRONMENT = 'http://nutecrexlab1.ufu.br/api'; // trocar aqui pelo endereco backend

class BaseApi {
  constructor() {
    this.api = axios.create({mode: 'cors'})
    this.api.interceptors.response.use(null, onResponseError)
  }

  getBaseConfig() {
    return {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  }

  request(path, options) {
    const mergedOptions = defaultsDeep(options, this.getBaseConfig());
    return this.api(`${ENVIRONMENT}/${path}`, mergedOptions).then(res => res.data)
  }
}

export default BaseApi
