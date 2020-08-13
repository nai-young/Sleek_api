import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:5000/'

class UserService {
  getProjects () {
    axios.get(API_URL + 'projects', { headers: authHeader() })
  }
  getClients () {
    axios.get(API_URL + 'clients', { headers: authHeader() })
  }
  getAdminBoard () {
    axios.get(API_URL + 'admin', { headers: authHeader() })
  }
  getProfile () {
    axios.get(API_URL + 'profile', { headers: authHeader() })
  }
  // TODO Add routes
}

export default new UserService()
