import React, { Component } from "react";
import { ProfileComponent } from "../components";
import axios from "axios";
import base_url from "../../../utils/api";
import history from "../../../utils/history";
import { isEmpty } from "loadsh";
class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      error: {},
    };
  }
  componentDidMount() {
    const token = localStorage.getItem("SessionToken");
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
        alert(error.response.data.message);
      });
  }
  handleChange = (value, key) => {
    this.setState({
      data: { ...this.state.data, [key]: value },
    });
  };
  handleForm = () => {
    if (isEmpty(this.validation())) {
      const token = localStorage.getItem("SessionToken");
      const options = {
        headers: { Authorization: `${token}` },
      };

      axios
        .post(`${base_url}/user/update`, this.state.data, options)
        .then((response) => {
          history.push("/");
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    }
  };

  validation = () => {
    let mobileRegex = /\d{10}/;
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
    return (
      <ProfileComponent
        data={this.state.data}
        handleChange={this.handleChange}
        handleForm={this.handleForm}
        value={this.state.data}
        error={this.state.error}
      />
    );
  }
}
export default ProfileContainer;
