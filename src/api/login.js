/**
 Created by ypl on 2020-6-2;
 */
import api from './api'
import axios from 'axios'

// 登录
export default function loginAction (params) {
  return axios.post({
    url: api.Login,
    data: params
  })
}

// 退出
export function logout (params) {
  return axios.get({
    url: api.logout,
    data: params
  })
}
