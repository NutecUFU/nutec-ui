import axios from 'axios'
import defaultsDeep from 'lodash/defaultsDeep'
import { onResponseError } from './intercept'
/*
  http://localhost:5000/api/v1
  http://nutecrexlab1.ufu.br/api/v1
*/
const ENVIRONMENT = 'http://nutecrexlab1.ufu.br/api/v1';

class BaseApi {
  constructor() {
    this.api = axios.create({mode: 'cors'})
    this.api.interceptors.response.use(null, onResponseError)
  }

  request(path, options) {
    const mergedOptions = defaultsDeep(options);
    return this.api(`${ENVIRONMENT}/${path}`, mergedOptions).then(res => res.data)
  }
}

export default BaseApi