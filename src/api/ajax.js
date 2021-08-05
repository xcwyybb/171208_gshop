import axios from 'axios'

/*
new promise之前，promise对象指的是respnse，下面代码，new promise之后
返回值：promise对象（异步返回的数据是：response.data）
*/

export default function ajax(url = '', data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {   //resolve和reject是函数
    //异步执行ajax
    let promise

    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }

    promise.then(response => {
      resolve(response.data)
    })
      .catch(error => {
        reject(error)
      })
  })
}
