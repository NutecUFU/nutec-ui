import baseRequest from './base'

export const LandingAPI = {
  getExperiments() {
    console.log('Test')
    return baseRequest('experiments/')
  }
}