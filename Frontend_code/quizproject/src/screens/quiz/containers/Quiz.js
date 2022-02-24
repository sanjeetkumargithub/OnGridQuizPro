import React, { Component } from "react";
import { QuizPageComponent } from "../components";
import base_url from "../../../utils/api";
import axios from "axios";
const token = localStorage.getItem("SessionToken");
class QuizContainer extends Component {
  state = {
    list: [],
    answers: {},
    res: {},
    open: false,
  };
  componentDidMount = () => {
    
    const options = {
      headers: { Authorization: `${token}` },
    };
    let id = localStorage.getItem("quizId");
    axios
      .get(`${base_url}/quiz/${id}/questions`, options)
      .then((response) => {
        const list = response.data.data;
        this.setState({ list: list });
      })
      .catch((error) => {
        console.log(error);
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
        let res = response.data.data;
        this.setState({ res: res });
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
  
  render() {
    return (
      <QuizPageComponent
        data={this.state.list}
        onChangeValue={this.onChangeValue}
        answers={this.state.answers}
        submitQuiz={this.submitQuiz}
        submitResponse={this.state.res}
        handleOpen={this.state.open}
      />
    );
  }
}
export default QuizContainer;
