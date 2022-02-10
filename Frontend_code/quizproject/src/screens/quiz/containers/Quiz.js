import React, { Component } from "react";
import { QuizComponent } from "../components";

export class QuizContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <QuizComponent />;
  }
}

export default QuizContainer;
