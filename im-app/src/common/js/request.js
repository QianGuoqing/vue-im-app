import axios from 'axios'
import { API_USER_INFO } from './apis'

axios.defaults.withCredentials = true

export function requestUserInfoByGet() {
  return new Promise((resolve, reject) => {
    axios.get(API_USER_INFO).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}