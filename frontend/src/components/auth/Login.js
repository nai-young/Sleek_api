import React, { Component } from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'

import AuthService from '../../services/auth-service'

const required = (value) => {
  if (!value) {
    return (
      <div role="alert">
                This field is required!
      </div>
    )
  }
}

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.handleLogin = this.handleLogin.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)

    this.state = {
      username: '',
      password: '',
      loading: false,
      message: ''
    }
  }

  onChangeUsername (e) {
    this.setState({ username: e.target.value })
  }

  onChangePassword (e) {
    this.setState({ password: e.target.value })
  }

  handleLogin (e) {
    e.preventDefault()

    this.setState({ loading: true })

    this.form.validateAll()

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password)
        .then(() => {
          this.props.history.push('/projects')
          window.location.reload()
        },
        err => {
          const resMessage = err.message

          this.setState({
            loading: false,
            message: resMessage
          })
        })
    } else {
      this.setState({ loading: false })
    }
  }

  render () {
    return <div>
      <div className="card-container">
        <img/>
        <Form onSubmit={ this.handleLogin } ref={ i => { this.form = i } }>
          <div className="form-item">
            <label htmlFor="username">Username</label>
            <Input type="text"
              name="username"
              value={ this.state.username }
              onChange={ this.onChangeUsername }
              validations={ [required] }
            />
          </div>
          <div className="form-item">
            <label htmlFor="password">Password</label>
            <Input type="text"
              name="password"
              value={ this.state.password }
              onChange={ this.onChangePassword }
            />
          </div>
          <div className="form-item">
            <button type="button" disabled={ this.state.loading }>
              { this.state.loading }
              <span>Login</span>
            </button>
          </div>
          { this.state.message && (
            <div className="form-group">
              <div role="alert">
                { this.state.message }
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={ i => { this.checkBtn = i } }/>
        </Form>
      </div>
    </div>
  }
}
