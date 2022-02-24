import React, { Component, useState } from "react";
import PrivateLayout from "../layouts/private";
import PublicLayout from "../layouts/public";

class Navigation extends Component {
  render() {
    if (localStorage.getItem("SessionToken")) return <PrivateLayout />;
    return <PublicLayout />;
  }
}

export default Navigation;
