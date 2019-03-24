import get from 'lodash/get'
import { logout } from 'core/utils/auth'

export function onResponseError(error) {
  const isUnauthorized = get(error, 'response.status') === 401

  if (isUnauthorized) {
    logout()
    window.location.replace('/admin/login')
  }

  return Promise.reject(error)
}
