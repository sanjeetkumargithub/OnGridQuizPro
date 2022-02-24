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
              <Grid container justifyContent="center" > <h4 style={{color:"blue"}}>Final Score</h4></Grid>
              <Grid item > </Grid>
              <Grid item justifyContent="left">
                <Grid container item xs={12}>{" "}
               <Grid item xs={10}> Total marks of quiz </Grid> <Grid item={4}>&nbsp; =</Grid>
                {submitResponse.rightQuestions}
              </Grid>
              <Grid container>
              <Grid item xs={10}> Number of questions </Grid> <Grid item={4}>&nbsp; =</Grid>
                
                {submitResponse.totalQuestions}
              </Grid>
              <Grid container>
                Number of right questions &nbsp;=
                {submitResponse.rightQuestions}
              </Grid>
              <Grid container >
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

//+++++++++++++++++++
// import * as React from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import { Grid } from "@mui/material";
// import { CustomButton } from "../../../shared";
// import history from "../../../utils/history";
// const AnswerDialog = ({ open, handleClose, submitResponse ,handleForm}) => {

//   let attempQuestion =
//     submitResponse.wrongQuestions + submitResponse.rightQuestions;
//         handleForm=()=>{
//           history.push("/");
//         }
//   return (
//     <Grid container item xs={10}>
//       <Dialog
//         fullWidth
//         open={open}
//         keepMounted
//         onClose={handleClose}
//         aria-describedby="alert-dialog-slide-description"
//       >
//         <DialogContent>
//           <DialogContentText
//             id="alert-dialog-slide-description"
//             paddingLeft={10}
//           >
//             {" "}
//             <h2 style={{ color: "blue" }}>Final Score</h2>
//             <h3>
//               Total marks of quiz{" "}
//               <span style={{ paddingLeft: "54px", marginLeft: "54px" }}>
//                 ={" "}
//               </span>{" "}
//               {submitResponse.rightQuestions}
//             </h3>
//             <h3>
//               Number of questions{" "}
//               <span style={{ paddingLeft: "41px", marginLeft: "41px" }}>
//                 ={" "}
//               </span>{" "}
//               {submitResponse.totalQuestions}
//             </h3>
//             <h3>
//               Number of right questions
//               <span style={{ paddingLeft: "15px", marginLeft: "15px" }}>
//                 ={" "}
//               </span>
//               {submitResponse.rightQuestions}
//             </h3>
//             <h3>
//               Number of wrong questions
//               <span style={{ paddingLeft: "5px", marginLeft: "5px" }}>= </span>
//               {submitResponse.wrongQuestions}
//             </h3>
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Grid container justifyContent="center">
//          <Grid item xs={6}>  <CustomButton name="Attempt Next quiz" handleClick={handleForm} /></Grid>
//           </Grid>
//         </DialogActions>
//       </Dialog>
//     </Grid>
//   );
// };
// export default AnswerDialog;
