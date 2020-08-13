import React, { Component } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import AuthService from './services/auth-service'

import Projects from './components/Projects'
import Clients from './components/Clients'
import Project from './components/Project'
import Profile from './components/Profile'
import Create from './components/Create'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Admin from './components/Admin'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: undefined,
      displayAdmin: false
    }
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser()
    
    if (user) {
      this.setState({
        currentUser: user,
        displayAdmin: user.role.includes('admin')
      })
    }
  }
  logOut() {
    AuthService.logout()
  }
  render () {
    const { currentUser, displayAdmin } = this.state

    return (
      <Router>
        <div className="grid-container">
          <header className="navbar">
            <div className="brand">
              <Link to={'/'}>Sleek</Link>
            </div>
            <div className="nav-links">
              <Link to={'/projects'}>Projects</Link>
              <Link to={'/create'}>Create</Link>
              <Link to={'/clients'}>Clients</Link>
            </div>
            <div className="nav-settings">
              { displayAdmin && (
                <Link to={'/admin'}>Admin</Link>
              )}
              { currentUser ? (
                <div>
                  <Link to={"/profile"}>{ currentUser.username }</Link>
                  <a href="/" onClick={ this.logOut }>Log Out</a>
                </div>
              ) : (
                <div>
                  <Link to={'/'}>Login</Link>
                  <Link to={'/register'}>Sign Up</Link>
                </div>
              )
              }
            </div>
          </header>
          <main className="main">
            <div className="content">
              <Route path="/" exact={true} component={Home}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/signin" component={SignIn}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/create" component={Create}/>
              <Route path="/project/:id" component={Project}/>
              <Route path="/clients" component={Clients}/>
              <Route path="/profile" component={Profile} />
              <Route path="/admin" component={Admin} />
            </div>
          </main>
          <footer className="footer">
            <div>
              All rights reserved.
            </div>
          </footer>
        </div>
      </Router>
    )
  }
}

