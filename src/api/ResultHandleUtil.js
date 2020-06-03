/**
 Created by ypl on 2020-6-2;
 */

export default function handleResult (result, t) {
  if (result === undefined) {
    t.message.error('请求失败')
    return false
  }
  if (result.status !== 200) {
    t.message.error(result.statusText)
    return false
  }
  if (result.data.code !== 0) {
    t.message.error(result.data.msg)
    return false
  }
  return true
}
