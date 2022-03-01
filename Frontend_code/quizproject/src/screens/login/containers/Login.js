import React, { Component } from "react";
import { LoginComponent } from "../components";
import base_url from "../../../utils/api";
import axios from "axios";
import { isEmpty } from "loadsh";
import { emailRegex } from "../../../utils/helper";

class LoginContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      error: {},
      errorPopup: false,
      errorMessage:""
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
          window.location.href = "/";
        })
        .catch((error) => {
          this.setState({ errorPopup: true });
          this.setState({ errorMessage: error.response.data.message });
        });
    }
  };

errorHandleChange=()=>{
  
  this.setState({ errorPopup: false });
}

  validation = () => {

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

    this.setState({ error: error });
    return error;
  };

  render() {

    const { data, error, errorMessage ,errorPopup} = this.state;

    return (
      <LoginComponent
        data={data}
        handleChange={this.handleChange}
        handleForm={this.handleForm}
        error={error}

        errorPopup={errorPopup}
         errorMessage={errorMessage}
         errorHandleChange={this.errorHandleChange}
      />
    );
  }
}
export default LoginContainer;
