import React, { Component } from "react";
import { SignUpComponent } from "../components";
import axios from "axios";
import base_url from "../../../utils/api";
import { isEmpty } from "loadsh";
class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      error: {},
    };
  }
  handleChange = (value, key) => {
    this.setState({
      data: { ...this.state.data, [key]: value },
    });
  };
  handleForm = () => {
    if (isEmpty(this.validation())) {
      const options = {
        headers: { Headers: "value" },
      };
      axios
        .post(`${base_url}/user/`, this.state.data, options)
        .then((response) => {
          console.log(response);
          localStorage.setItem("SessionToken", response.data.data.token);
          window.location.href = "/";
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    }
  };

  validation = () => {
    let emailRegex = /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/;
    let passwordRegex =
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;
    let mobileRegex = /\d{10}/;
    let error = {};

    if (!this.state.data.name) {
      error.name = "Name should not be empty";
    }
    if (this.state.data.email && !emailRegex.test(this.state.data.email)) {
      error.email = "Please enter valid email id";
    }
    if (!this.state.data.email) {
      error.email = "Email id should not be empty";
    }
    if (!this.state.data.mobile) {
      error.mobile = "Mobile number should not be empty";
    }
    if (!this.state.data.password) {
      error.password = "Password should not be empty";
    }
    if (!this.state.data.confirmpassword) {
      error.confirmpassword = "Confirm password should not be empty";
    }

    if (
      this.state.data.mobile &&
      (!mobileRegex.test(this.state.data.mobile) ||
        this.state.data.mobile.length != 10)
    ) {
      error.mobile = "Please enter valid mobile";
    }
    if (
      this.state.data.password &&
      !passwordRegex.test(this.state.data.password)
    ) {
      error.password = "Please enter valid password.";
    }
    if (
      this.state.data.confirmpassword &&
      this.state.data.password !== this.state.data.confirmpassword
    ) {
      error.confirmpassword = "Confirm password not match.";
    }

    this.setState({ error: error });
    return error;
  };
  render() {
    return (
      <SignUpComponent
        data={this.state.data}
        handleChange={this.handleChange}
        handleForm={this.handleForm}
        error={this.state.error}
      />
    );
  }
}

export default SignUpContainer;
