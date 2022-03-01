import React, { Component } from "react";
import { ProfileComponent } from "../components";
import axios from "axios";
import base_url from "../../../utils/api";
import { isEmpty } from "loadsh";
import { mobileRegex } from "../../../utils/helper";

const token = localStorage.getItem("SessionToken");
class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      error: {},
      errorPopup: false,
      errorMessage:""
    };
  }

  componentDidMount() {

    const options = {
      headers: { Authorization: `${token}` },
    };
    axios
      .get(`${base_url}/user/`, options)
      .then((res) => {
        const data = res.data;

        this.setState({ data: data.data });
      })
      .catch((error) => {
        this.setState({ errorPopup: true });
          this.setState({ errorMessage: error.response.data.message });
      });
  }

  errorHandleChange=()=>{
  
    this.setState({ errorPopup: false });
  }
  handleChange = (value, key) => {
    this.setState({
      data: { ...this.state.data, [key]: value },
    });
  };

  handleForm = () => {
    if (isEmpty(this.validation())) {
      const options = {
        headers: { Authorization: `${token}` },
      };

      axios
        .post(`${base_url}/user/update`, this.state.data, options)
        .then((response) => {

          this.props.history.push("/");
        })
        .catch((error) => {
          this.setState({ errorPopup: true });
          this.setState({ errorMessage: error.response.data.message });
        });
    }
  };

  validation = () => {

    let error = {};

    if (!this.state.data.name) {
      error.name = "Name should not be empty";
    }

    if (!this.state.data.mobile) {
      error.mobile = "Mobile number should not be empty";
    }

    if (
      this.state.data.mobile &&
      (!mobileRegex.test(this.state.data.mobile) ||
        this.state.data.mobile.length != 10)
    ) {
      error.mobile = "Please enter valid mobile number";
    }
    this.setState({ error: error });
    return error;
  };

  render() {

    const { data, error ,errorMessage,errorPopup,errorHandleChange} = this.state;
    return (
      <ProfileComponent
        data={data}
        handleChange={this.handleChange}
        handleForm={this.handleForm}
        value={data}
        error={error}
        errorPopup={errorPopup}
        errorMessage={errorMessage}
        errorHandleChange={this.errorHandleChange}
      />
    );
  }
}
export default ProfileContainer;
