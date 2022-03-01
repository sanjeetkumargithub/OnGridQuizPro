import React, { Component } from "react";
import { SignUpComponent } from "../components";
import axios from "axios";
import base_url from "../../../utils/api";
import { isEmpty } from "loadsh";
import { emailRegex, passwordRegex, mobileRegex } from "../../../utils/helper";

class SignUpContainer extends Component {
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
        .post(`${base_url}/user/`, this.state.data, options)
        .then((response) => {
          console.log(response);
          localStorage.setItem("SessionToken", response.data.data.token);
          window.location.href="/";
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
      error.confirmpassword = "Confirm password should contain at least one digit, at least one lower case, at least one upper case, at least one special characterat and at least 8 from the mentioned characters.";
    }


    this.setState({ error: error });
    return error;
  };

  render() {
    const { data, error ,errorMessage,errorPopup,errorHandleChange} = this.state;
    return (
      <SignUpComponent
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

export default SignUpContainer;
