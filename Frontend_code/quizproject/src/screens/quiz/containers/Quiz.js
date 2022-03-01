import React, { Component } from "react";
import { QuizPageComponent } from "../components";
import base_url from "../../../utils/api";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const token = localStorage.getItem("SessionToken");

class QuizContainer extends Component {
  state = {
    questions: [],
    answers: {},
    submitResponse: {},
    open: false,
    pageLoading: false

  };
  componentDidMount = () => {
    this.setState({ pageLoading: true });
    const options = {
      headers: { Authorization: `${token}` },
    };
    let id = localStorage.getItem("quizId");
    axios
      .get(`${base_url}/quiz/${id}/questions`, options)
      .then((response) => {
        const questions = response.data.data;
        this.setState({ questions: questions });
        this.setState({ pageLoading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ pageLoading: false });
      });
  };
  onChangeValue = (id, value) => {
    let { answers } = this.state;
    answers[id] = value;
    this.setState({ answers: answers });
  };
  submitQuiz = () => {
    let { answers } = this.state;
    let ans = Object.keys(answers).map((id) => {
      return {
        id: id,
        answer: answers[id],
      };
    });
    let submitQuestions = { submitQuestions: ans };

    const options = {
      headers: { Authorization: `${token}` },
    };
    let quizId = localStorage.getItem("quizId");
    axios
      .post(`${base_url}/quiz/${quizId}/submit`, submitQuestions, options)
      .then((response) => {
        let responses = response.data.data;
        this.setState({ submitResponse: responses });
      })
      .catch((error) => {
        console.log(error);
      });
    this.handleOpen();
    this.setState({ answers: answers });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleForm = () => {
    localStorage.removeItem("quizTitle");
    this.props.history.push("/");
  };

  render() {
    const { questions, answers, submitResponse, open } = this.state;
    return (
      <>
        {this.state.pageLoading ? <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop> :

          <QuizPageComponent
            data={questions}
            onChangeValue={this.onChangeValue}
            answers={answers}
            submitQuiz={this.submitQuiz}
            submitResponse={submitResponse}
            handleOpen={open}
            handleForm={this.handleForm}
          />
        }
      </>

    );
  }
}
export default QuizContainer;
