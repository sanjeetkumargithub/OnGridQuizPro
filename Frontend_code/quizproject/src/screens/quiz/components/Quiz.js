import * as React from "react";
import { Grid } from "@mui/material";
import { CustomButton, CustomQuestionCard } from "../../../shared";
import { AnswerDialog } from "./";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
const QuizComponent = ({
  data,
  onChangeValue,
  answers,
  submitQuiz,
  submitResponse,
  handleOpen,
}) => {
  return (
    <>
      <Grid marginTop={3} paddingTop={3}>
        <Grid container>
          {data.length > 0 ? (
            data.map((item) => (
              <CustomQuestionCard
                data={item}
                title={item.title}
                onChangeValue={onChangeValue}
                answers={answers}
              />
            ))
          ) : (
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open
            >
              <CircularProgress color="inherit" />
            </Backdrop>
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
        />
      </Grid>
    </>
  );
};
export default QuizComponent;
