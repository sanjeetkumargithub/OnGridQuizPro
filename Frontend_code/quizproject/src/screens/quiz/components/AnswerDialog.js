import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Grid } from "@mui/material";
import { CustomButton } from "../../../shared";

const AnswerDialog = ({ open, handleClose, submitResponse, handleForm }) => {

  return (
    <Grid container item xs={10}>
      <Dialog
        open={open}
        keepMounted

        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent justifyContent="center" >
          <DialogContentText id="alert-dialog-slide-description" justifyContent="center" >
            <Grid container justifyContent="center" maxWidth={320}>
              <Grid container justifyContent="center" >
                {" "}
                <h4 style={{ color: "blue" }}>Final Score</h4>
              </Grid>

              < Grid container item xs={12} >
                <Grid item xs={10} >Total number of questions:</Grid>

                <Grid item xs={2} justifyContent="right"> {submitResponse.totalQuestions}</Grid>

              </Grid>
              < Grid container item xs={12} >
                <Grid item xs={10} >Total mark of quiz:</Grid>

                <Grid item xs={2} justifyContent="right"> {submitResponse.rightQuestions}</Grid>

              </Grid>
              < Grid container item xs={12} >
                <Grid item xs={10} justifyContent="left"> Number of wrong questions:</Grid>

                <Grid item xs={2} justifyContent="right">  {submitResponse.wrongQuestions}</Grid>

              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={10} justifyContent="left">Number of right questions:</Grid>

                <Grid item xs={2} justifyContent="right"> {submitResponse.rightQuestions}</Grid>

              </Grid>
            </Grid>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Grid container justifyContent="center">
            <Grid >
              {" "}
              <CustomButton name="Attempt next quiz" handleClick={handleForm} />
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
export default AnswerDialog;
