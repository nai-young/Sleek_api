import axios from 'axios'

const API_URL = 'http://localhost:3000/login/'
class AuthService {

  // access methods
  login (username, password) {
    return axios.post(API_URL + 'signin', {
      username,
      password
    }).then(res => {
      if ( res.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(res.data))
      }
      return res.data
    })
  }
  logout () {

  }

}