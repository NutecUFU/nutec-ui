import axios from 'axios'
import defaultsDeep from 'lodash/defaultsDeep'
import get from 'lodash/get'
import io from 'socket.io-client'

const ENVIRONMENT = 'http://nutecrexlab1.ufu.br/api';

const onResponseError = (error) => {
  const isUnauthorized = get(error, 'response.status') === 401

  return Promise.reject(error)
}

const baseConfig = () => {
  const api = axios.create({mode: 'cors'})

  api.interceptors.response.use(null, onResponseError)
}

export const useRequest = (path, options) => {
  const mergedOptions = defaultsDeep(options);

  return baseConfig()(`${ENVIRONMENT}/${path}`, mergedOptions).then(res => res.data)
}

export const useSocket = (path) => {
  const socket = io.connect(path)
  
  return socket
}