import axios from 'axios'

export default class AuthService {

  constructor() {
    this.setAxiosDefaultAuthorizationHeader()
  }

  login(email, password) {
    return axios.post('http://localhost:8000/api/login', {
      email, password
    }).then(data => {
      window.localStorage.setItem('loginToken', data.data.token)
      this.setAxiosDefaultAuthorizationHeader()
    })
  }

  setAxiosDefaultAuthorizationHeader() {
    const TOKEN = window.localStorage.getItem('loginToken')
    axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`
  }

  logout() {
    window.localStorage.removeItem('loginToken')
    delete axios.defaults.headers.common['Authorization']
  }

  isAuthenticated() {
    return !!window.localStorage.getItem('loginToken')
  }
}

export const authService = new AuthService()
