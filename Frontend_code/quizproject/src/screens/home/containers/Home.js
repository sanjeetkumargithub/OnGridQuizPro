import React, { Component } from "react";
import { HomeComponent } from "../components";
import base_url from "../../../utils/api";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizs: [],
      pageLoading: false,
      noOfPages:0,
      pages:1
    };
  }
  pageanationQuiz=(event,pages)=>{

    const options = {
      headers: { Headers: "value" },
    };
    console.log("pages",pages);
        this.setState({pages:pages});
      axios
      .get(`${base_url}/quiz/${pages-1}`)
      .then((response) => {
        const quizs = response.data.content;
        this.setState({ quizs: quizs });
        this.setState({ pageLoading: false });
        this.setState({noOfPages:response.data.totalPages});
        console.log(quizs);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ pageLoading: false });
      });
    }


  componentDidMount() {
    this.setState({ pageLoading: true });
    axios
      .get(`${base_url}/quiz/0`)
      .then((response) => {
        const quizs = response.data.content;
        this.setState({ quizs: quizs });
        this.setState({ pageLoading: false });
        this.setState({noOfPages:response.data.totalPages});
      })
      .catch((error) => {
        console.log(error);
        this.setState({ pageLoading: false });
      });
  }

  handleClick = (item) => {
    localStorage.setItem("quizId", item.id);
    localStorage.setItem("quizTitle", item.title);

    if (localStorage.getItem("SessionToken")) this.props.history.push("/quiz");
    else window.location.href = "/login";
  };

  render() {
    const { quizs } = this.state;
    return (
      <>
        {this.state.pageLoading ? <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop> :
          (
            <HomeComponent pages={this.state.pages} quizs={quizs} handleClick={this.handleClick} pageanationQuiz={this.pageanationQuiz} noOfPages={this.state.noOfPages} />)
        }
      </>
    );
  }
}
export default HomeContainer;
