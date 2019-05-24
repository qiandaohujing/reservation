import request from '@/utils/request';
const baseURL = '/api';

/**
 * @description register
 * @description url=/register
 * @param {} data.studentNum
 * @param {} data.studentName
 * @param {} data.studentPassword
 * 
 * @returns {boolean}
 */
export function register(data) {
  const url = `${baseURL}/register`
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
  const url = `${baseURL}/login`
  return request({
    url,
    data,
    method: 'POST',
    loading: true
  })
}

/**
 * @description logout
 * @description url=/logout
 * 
 * @returns {boolean}
 */
export function logOut() {
  const url = `${baseURL}/logout`
  return request({
    url,
    method: 'POST',
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
  const url = `${baseURL}/modify`
  return request({
    url,
    data,
    method: 'POST',
    loading: true
  })
}

/**
 * @description manage
 * @description url=/manage
 * @param {} data.AdminPassword
 * 
 * @returns {boolean}
 */
export function manage(data) {
  const url = `${baseURL}/manage`
  return request({
    url,
    data,
    mothod: 'POST',
    loading: true
  })
}