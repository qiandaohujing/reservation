import request from '@/utils/request';
const baseURL = '/api';

/**
 * @description register
 * @description url=/register
 * @param {} data.studentID
 * @param {} data.studentName
 * @param {} data.studentPassword
 * 
 * @returns {boolean}
 */
export function register(data) {
  const url = `${baseURL}/upload`
  return request({
    url,
    data,
    method: 'POST',
    loading: true
  })
}

/**
 * @description login
 * @description url=/login
 * @param {} data.studentNum
 * @param {} data.studentPassword
 * 
 * @returns {boolean}
 */
export function login(data) {
  const url = `${baseURL}/upload`
  return request({
    url,
    data,
    method: 'POST',
    loading: true
  })
}

/**
 * @description modify
 * @description url=/modify
 * @param {} data.studentNum
 * @param {} data.studentPassword
 * @param {} data.newStudentPassword
 * 
 * @returns {boolean}
 */
export function modify(data) {
  const url = `${baseURL}/upload`
  return request({
    url,
    data,
    method: 'POST',
    loading: true
  })
}