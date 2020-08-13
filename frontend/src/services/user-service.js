import axios from 'axios'
import AuthHeader from './auth-header'

const API_URL = 'http://localhost:5000/'

class UserService {
  getProjects () {
    axios.get(API_URL + 'projects', { headers: AuthHeader })
  }
  getClients () {
    axios.get(API_URL + 'clients', { headers: AuthHeader })
  }
  getAdminBoard () {
    axios.get(API_URL + 'admin', { headers: AuthHeader })
  }
  getProfile () {
    axios.get(API_URL + 'profile', { headers: AuthHeader })
  }
  // TODO Add routes
}

export default UserService
