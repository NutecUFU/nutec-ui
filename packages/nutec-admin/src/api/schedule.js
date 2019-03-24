import BaseApi from './base'

const api = new BaseApi()

class Schedule {
  static getAll() {
    return api.request(`v1/schedule`);
  }
  static create(data) {
    return api.request(`v1/schedule`, {method: 'post', data})
  }
  static getSchedule(id) {
    return api.request(`v1/schedule/${id}`);
  }
  static delete(id) {
    return api.request(`v1/schedule/${id}`, {method: 'delete'});
  }
}

export default Schedule
