import request from '@/utils/request';
const baseURL = '/api';

/**
 * @description editRole
 * @description url=/editRole
 * @param {} data.studentNum
 * 
 * @returns {boolean}
 */
export function editRole(data) {
  const url = `${baseURL}/editRole`
  return request({
    url,
    data,
    method: 'POST',
    loading: true
  })
}

/**
 * @description deleteRole
 * @description url=/deleteRole
 * @param {} data.studentNum
 * 
 * @returns {boolean}
 */
export function deleteRole(data) {
  const url = `${baseURL}/deleteRole`
  return request({
    url,
    data,
    method: 'POST',
    loading: true
  })
}