import axios from 'axios'
import defaultsDeep from 'lodash/defaultsDeep'
import get from 'lodash/get'

const ENVIRONMENT = 'http://nutecrexlab1.ufu.br/api/v1'

const onResponseError = (error) => {
  const isUnauthorized = get(error, 'response.status') === 401

  return Promise.reject(error)
}

const axiosAPI = () => {
  const api = axios.create({mode: 'cors'})
  api.interceptors.response.use(null, onResponseError)
  return api
}

const request = (path, options) => {
  const mergedOptions = defaultsDeep(options);
  return axiosAPI()(`${ENVIRONMENT}/${path}`, mergedOptions).then(res => res.data)
}

export default request