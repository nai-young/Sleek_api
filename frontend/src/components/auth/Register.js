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
  if (isEmail(value)) {
    return (
      <div role="alert">
        Not a valid email
      </div>
    )
  }
}
const valusername = value => {
  if (valusername.length < 3 || valusername.length > 20) {
    return (
      <div role="alert">
        Username must be between 3 and 20 characters
      </div>
    )
  }
}
const valpassword = value => {
  if (valpassword.length < 6 || valpassword.length > 40) {
    return (
      <div role="alert">
        Password must be between 6 and 40 characters
      </div>
    )
  }
}