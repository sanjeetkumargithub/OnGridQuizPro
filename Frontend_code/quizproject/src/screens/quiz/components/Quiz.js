import * as React from "react";
import { Grid } from "@mui/material";
import { CustomButton } from "../../../shared";
import { AnswerDialog } from "./";
import CustomQuestionCard from "./CustomQuestionCard";

const QuizComponent = ({ data, onChangeValue, answers, submitQuiz, submitResponse, handleOpen, handleForm }) => {

  return (
    <>
      <Grid marginTop={3} paddingTop={3} paddingRight={2} marginRight={2}>a
        <Grid container justifyContent="center" marginTop={2} paddingTop={2} fontSize={30}>{localStorage.getItem("quizTitle")}-Quiz</Grid>
        <Grid container>
          {data.length > 0 ? (
            data.map((item, index) => (
              <CustomQuestionCard
                data={item}
                index={index}
                title={item.title}
                onChangeValue={onChangeValue}
                answers={answers}
              />
            ))
          ) : (
            <Grid container justifyContent="center" marginTop={5} paddingTop={5} fontSize={40}> No Question</Grid>
          )}
        </Grid>
        <Grid container>
          <Grid item xs={5}>
            {" "}
          </Grid>
          <Grid
            item
            xs={2}
            color="white"
            marginTop={1}
            paddingTop={1}
            marginBottom={5}
            paddingBottom={5}
          >
            <CustomButton name=" Submit Quiz" handleClick={submitQuiz} />
          </Grid>
        </Grid>
        <AnswerDialog
          open={handleOpen}
          submitResponse={submitResponse}
          handleForm={handleForm}
        />
      </Grid>
    </>
  );
};
export default QuizComponent;
