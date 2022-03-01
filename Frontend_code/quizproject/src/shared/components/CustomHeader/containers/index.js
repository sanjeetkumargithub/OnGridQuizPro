import React, { Component } from "react";
import HeaderComponent from "../components";
import axios from "axios";
import base_url from "../../../../utils/api";
import { withRouter } from "react-router-dom";

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
    if (id == 1) this.props.history.push("/");
    if (id == 2) {

      if (token) { this.props.history.push("/profile"); }
      else this.props.history.push("/login");
    }
    if (id == 4) window.location.href = "/login";
    if (id == 5) window.location.href = "/signup";
    if (id == 3) {
      const options = {
        headers: { Authorization: `${token}` },
      };
      axios
        .post(`${base_url}/user/logout`, `${token}`, options)
        .then((response) => {
          localStorage.removeItem("SessionToken");
          this.props.history.push("/");
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("SessionToken");
          this.props.history.push("/");
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
export default withRouter(HeaderContainer);
