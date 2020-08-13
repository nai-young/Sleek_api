import axios from 'axios'

const API_URL = 'http://localhost:5000/'
class AuthService {
  // access methods
  login (username, password) {
    return axios.post(API_URL, {
      username,
      password
    }).then(res => {
      if (res.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(res.data))
      }
      return res.data
    })
  }

  logout () {
    localStorage.removeItem('user')
  }

  register (username, email, password) {
    axios.post(API_URL + 'signup', {
      username,
      email,
      password
    })
  }

  getCurrentUser () {
    return JSON.parse(localStorage.getItem('user'))
  }
}

export default new AuthService()
