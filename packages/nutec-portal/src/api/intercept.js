import get from 'lodash/get'

export function onResponseError(error) {
  const isUnauthorized = get(error, 'response.status') === 401

  return Promise.reject(error)
}
