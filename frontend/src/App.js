import React from 'react'
import './App.css'
import './index.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


import Home from './components/Home'
import Clients from './components/Clients'
import Project from './components/Project'
import Profile from './components/Profile'
import Create from './components/Create'
import Login from './components/auth/Login'

function App () {
  return (
    <Router>
      <div className="grid-container">
        <header className="navbar">
          <div className="brand">
            <Link to="/projects">Sleek</Link>
          </div>
          <div className="nav-links">
            <Link to="/projects">Projects</Link>
            <Link to="/create">Create</Link>
            <Link to="/clients">Clients</Link>
          </div>
          <div className="nav-settings">
            <Link to="/profile">Profile</Link>
            <Link to="/">Log Out</Link>
          </div>
        </header>
        <main className="main">
          <div className="content">
            <Route path="/" exact={true} component={Login}/>
            <Route path="/projects" component={Home}/>
            <Route path="/create" component={Create}/>
            <Route path="/project/:id" component={Project}/>
            <Route path="/clients" component={Clients}/>
            <Route path="/profile" component={Profile} />
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

export default App
