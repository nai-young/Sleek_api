import React, { Component } from 'react'
import AuthService from '../../services/auth-service'

export default class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: AuthService.getCurrentUser()
    }
  }

  render() {
    const { currentUser } = this.state

    return (
      <div className="container">
        <h2>
          { currentUser.username }
        </h2>
        <p>
          <b>Token:</b>{" "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <b>Id:</b>{" "}
          { currentUser.id}
        </p>
        <p>
          <b>Email: </b>{" "}
          { currentUser.email }
        </p>
        <p>
          <b>Role: </b>{" "}
          {currentUser.role.map((rol, i) => {
            return <li key={i}>
              {rol}
            </li>
          })}
        </p>
      </div>
    )
  }
}
