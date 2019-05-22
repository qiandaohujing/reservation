import request from '@/utils/request';
const baseURL = '/api';

/**
 * @description date
 * @description url=/date
 * @param {} data.studentNum
 * @param {} data.studentName
 * @param {} data.libLevel
 * @param {} data.deskNum
 * @param {} data.dateTime
 * 
 * @returns {boolean}
 */
export function date(data) {
  const url = `${baseURL}/date`
  return request({
    url,
    data,
    method: 'POST',
    loading: true
  })
}

/**
 * @description cancel
 * @description url=/cancel
 * @param {} data.dateinfo_id
 * 
 * @returns {boolean}
 */
export function cancel(data) {
  const url = `${baseURL}/cancel`
  return request({
    url,
    data,
    method: 'POST',
    loading: true
  })
}

/**
 * @description changeDate
 * @param {} data.dateinfo_id
 * @param {} data.dateTime
 */
export function changeDate(data) {
  const url = `${baseURL}/changeDate`
  return request({
    url,
    data,
    method: 'POST',
    loading: true
  })
}

/**
 * @description getDate
 * @description url=/getDate
 * @param {} data.studentNum
 * 
 * @returns {json}
 */
export function getDate(data) {
  const url = `${baseURL}/getDate`
  return request({
    url,
    data,
    method: 'GET',
    loading: true
  })
}

/**
 * @description back
 * @description url=/back
 * @param {} data.deskId
 * 
 * @returns {boolean}
 */
export function back(data) {
  const url = `${baseURL}/back`
  return request({
    url,
    data,
    method: 'POST',
    loading: true
  })
}

/**
 * @description changeStatus
 * @description url=/changeStatus
 * @param {} data.deskId
 * 
 * @returns {boolean}
 */
export function changeStatus(data) {
  const url = `${baseURL}/changeStatus`
  return request({
    url,
    data,
    method: 'POST',
    loading: true
  })
}