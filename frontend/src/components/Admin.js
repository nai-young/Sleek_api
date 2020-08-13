import React, { Component } from 'react'
import UserService from '../services/user-service'

export default class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }
  componentDidMount() {
    UserService.getAdminBoard().then(res => {
        this.setState({
          content: res.data
        },
        err => {
          this.setState({
            content:  err.response.data.message
          })
        })
      })
  }

  render() {
    return (
      <div>
        <h3>{ this.state.content }</h3>
      </div>
    )
  }
}
