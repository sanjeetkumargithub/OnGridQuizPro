import React, { Component } from "react";
import HeaderComponent from "../components";
import axios from "axios";
import base_url from "../../../../utils/api";
import history from "../../../../utils/history";
const token = localStorage.getItem("SessionToken");
class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = (id) => {
    if (id == 1) history.push("/");
    if (id == 2) {
      if (token) history.push("/profile");
      else history.push("/login");
    }
    if (id == 4) window.location.href = "/login";
    if (id == 5) history.push("/signup");
    if (id == 3) {
      const options = {
        headers: { Authorization: `${token}` },
      };
      axios
        .post(`${base_url}/user/logout`, `${token}`, options)
        .then((response) => {
          localStorage.removeItem("SessionToken");
          history.push("/");
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("SessionToken");
          history.push("/");
        });
    }
    this.setState({ anchorEl: null });
  };
  render() {
    return (
      <HeaderComponent
        token={token}
        anchorEl={this.state.anchorEl}
        handleClose={this.handleClose}
        handleMenu={this.handleMenu}
      />
    );
  }
}
export default HeaderContainer;
