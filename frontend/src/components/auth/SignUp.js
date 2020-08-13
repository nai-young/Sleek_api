import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from '../../services/auth-service'

const required = value => {
  if (!value) {
    return (
      <div role="alert">
        This field is required!
      </div>
    )
  }
}

const email = value => {
  if (!isEmail(value)) {
    return (
      <div role="alert">
        Not a valid email
      </div>
    )
  }
}
const valusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div role="alert">
        Username must be between 3 and 20 characters
      </div>
    )
  }
}
const valpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div role="alert">
        Password must be between 6 and 40 characters
      </div>
    )
  }
}

export default class SignUp extends Component {
  constructor(props) {
    super(props)

    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.handleRegister = this.handleRegister.bind(this)

    this.state = {
      email: '',
      username: '',
      password: '',
      message: '',
      success: false
    }
  }
  onChangeEmail (e) {
    this.setState({ email: e.target.value })
  }
  onChangeUsername (e) {
    this.setState({ username: e.target.value })
  }
  onChangePassword (e) {
    this.setState({ password: e.target.value })
  }
  handleRegister (e) {
    e.preventDefault()
    
    this.setState({ success: false, message: '' })
    this.form.validateAll()

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password
      ).then(res => {
        this.setState({
          message: res.data.message,
          success: true
        })
      },
      err => {
        const resMessage = err.message

        this.setState({
          message: resMessage,
          success: false
        })
      })
    }
  }

  render () {
    return (
      <div>
        <div className="card-container">
          <img/>
          <Form onSubmit={ this.handleRegister } ref={ i => this.form = i }>
            { !this.state.success && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input 
                    type = "text"
                    name = "username"
                    value = { this.state.username }
                    onChange = { this.onChangeUsername }
                    validations = { [required, valusername] }  
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input 
                    type = "text"
                    name = "email"
                    value = { this.state.email }
                    onChange = { this.onChangeEmail }
                    validations = { [required, email] }  
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Password</label>
                  <Input 
                    type = "password"
                    name = "password"
                    value = { this.state.password }
                    onChange = { this.onChangePassword }
                    validations = { [required, valpassword] }  
                  />
                </div>
                <div className="form-group">
                  <button type="button">Sign Up</button>
                </div>
              </div>
            )}
            { this.state.message && (
              <div className="form-group">
                <div 
                className={ this.state.successful
                  ? "alert alert-success"
                  : "alert alert-danger"
                }
                role="alert"
                >
                  { this.state.message }
                </div>

              </div>
            )}
            <CheckButton style={{ display: "none" }}
              ref={i => {
                this.checkBtn = i;
              }}/>

          </Form>
        </div>
      </div>
    )
  }
}