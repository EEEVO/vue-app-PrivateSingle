/**
 * Created by duoxieyun on 2017/8/10.
 */
import axios from 'axios';

const localAxios = axios.create({
  baseURL: `https://openapi.duoxieyun.com/v2/duoxieyun/app`,
  headers: {
    "Api-Key": "ejaveQbLXF6sIUebX2O58LgI0XM7yld7",
    "Api-Domain": "android"
  }
})



const fetch = (options) => {
  let {
    url,
    method = 'get',
    data,
  } = options;

  switch (method.toLowerCase()) {
    case 'get':
      return localAxios.get(url, {
        params: data,
      })
    case 'delete':
      return localAxios.delete(url, {
        data: data,
      })
    case 'post':
      return localAxios.post(url, data)
    case 'put':
      return localAxios.put(url, data)
    case 'patch':
      return localAxios.patch(url, data)
    default:
      return localAxios(options)
  }
}


export default function request(options) {
  console.log('options',options)
  return fetch(options)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      const {response} = error
      let msg
      let statusCode
      if (response && response instanceof Object) {
        const {data, statusText} = response
        statusCode = response.status
        msg = data.message || statusText
      } else {
        statusCode = 600
        msg = error.message || 'Network Error'
      }
      return {success: false, statusCode, message: msg}
    })
}
