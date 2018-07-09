import axios from 'axios'
import { 
  API_USER_INFO,
  API_USER_LIST,
  API_USER_REGISTER
} from './apis'

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

export function requestUserListByGet() {
  return new Promise((resolve, reject) => {
    axios.get(API_USER_LIST).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export function postUserRegister(username, password, type) {
  return new Promise((resolve, reject) => {
    axios.post(API_USER_REGISTER, {
      username: username,
      password: password,
      type: type
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}