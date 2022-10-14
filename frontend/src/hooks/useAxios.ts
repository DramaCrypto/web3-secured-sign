import { useWeb3React } from '@web3-react/core';
import axios from 'axios'
import { JwtTokenKey } from 'config';

export default function useAxios() {
  const {account} = useWeb3React()
  axios.interceptors.request.use(request => {
    const token = localStorage.getItem(`${JwtTokenKey}-${account}`)
    if (token) {
      request.headers.common['Authorization'] = `Bearer ${token}`
    }
    
    request.timeout = 20000;
    return request
  })
  
  axios.interceptors.response.use(response => {  
    return Promise.resolve(response);
  }, error => {
      return Promise.reject(error)
  })
}
