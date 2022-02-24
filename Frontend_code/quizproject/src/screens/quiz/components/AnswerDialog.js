import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Grid } from "@mui/material";
import { CustomButton } from "../../../shared";
import history from "../../../utils/history";
const AnswerDialog = ({ open, handleClose, submitResponse, handleForm }) => {
  let attempQuestion =
    submitResponse.wrongQuestions + submitResponse.rightQuestions;
  handleForm = () => {
    history.push("/");
  };
  return (
    <Grid container item xs={10}>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Grid container justifyContent="center">
              <Grid container justifyContent="center">
                {" "}
                <h4 style={{ color: "blue" }}>Final Score</h4>
              </Grid>
              <Grid item> </Grid>
              <Grid item justifyContent="left">
                <Grid container item xs={12}>
                  {" "}
                  <Grid item xs={10}>
                    {" "}
                    Total marks of quiz{" "}
                  </Grid>{" "}
                  <Grid item={4}>&nbsp; =</Grid>
                  {submitResponse.rightQuestions}
                </Grid>
                <Grid container>
                  <Grid item xs={10}>
                    {" "}
                    Number of questions{" "}
                  </Grid>{" "}
                  <Grid item={4}>&nbsp; =</Grid>
                  {submitResponse.totalQuestions}
                </Grid>
                <Grid container>
                  Number of right questions &nbsp;=
                  {submitResponse.rightQuestions}
                </Grid>
                <Grid container>
                  Number of wrong questions={submitResponse.wrongQuestions}
                </Grid>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Grid container justifyContent="center">
            <Grid item xs={6}>
              {" "}
              <CustomButton name="Attempt Next quiz" handleClick={handleForm} />
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
export default AnswerDialog;
