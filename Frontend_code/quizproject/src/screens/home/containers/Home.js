import React, { Component } from "react";
import { HomeComponent } from "../components";
import base_url from "../../../utils/api";
import axios from "axios";
class HomeContainer extends Component {
  state = {
    posts: [],
    
  };

  componentDidMount() {
    axios
      .get(`${base_url}/quiz/`)
      .then((res) => {
        const posts = res.data;
        this.setState({ posts });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleClick = (id) => {
    localStorage.setItem("quizId", id);
    if (localStorage.getItem("SessionToken")) window.location.href = "/quiz";
    else window.location.href = "/login";
  };
  render() {
    return (
      <HomeComponent data={this.state.posts} handleClick={this.handleClick} />
    );
  }
}
export default HomeContainer;
