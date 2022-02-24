import React, { Component } from "react";
import { LoginComponent } from "../components";
import base_url from "../../../utils/api";
import axios from "axios";
import history from "../../../utils/history";
import { isEmpty } from "loadsh";
class LoginContainer extends Component {
  constructor() {
    super();
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
        .post(`${base_url}/user/login`, this.state.data, options)
        .then((response) => {
          console.log(response);
          localStorage.setItem("SessionToken", response.data.data.token);
          history.push("/");
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
    let error = {};
    if (!this.state.data.email) {
      error.email = "Email id should not be empty";
    }
    if (!this.state.data.password) {
      error.password = "Password should not be empty";
    }
    if (this.state.data.email && !emailRegex.test(this.state.data.email)) {
      error.email = "Please enter valid email id";
    }
    if (
      this.state.data.password &&
      !passwordRegex.test(this.state.data.password)
    ) {
      error.password = " Please enter valid password.";
    }
    this.setState({ error: error });
    return error;
  };
  render() {
    return (
      <LoginComponent
        data={this.state.data}
        handleChange={this.handleChange}
        handleForm={this.handleForm}
        error={this.state.error}
      />
    );
  }
}
export default LoginContainer;
