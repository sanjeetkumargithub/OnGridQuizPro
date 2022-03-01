import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions, Grid } from "@mui/material";
import { CustomRadioButton } from "../../../../shared";
import { choice } from "../../../../shared/constants";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  radioStyle: {
    "&.MuiFormControl-root": {
      width: "100%",
    },
  },
  labelStyle: {
    "&.MuiFormControlLabel-root": {
      marginRight: "25%",
    },
  },
}));

const QuestionCard = ({ title, data, onChangeValue, answers, index }) => {
  const classes = useStyles();

  return (
    <Grid item xs={4} paddingLeft={5} paddingTop={5}>

      <Card sx={{ maxWidth: 450 }} style={{ backgroundColor: "#F7ECDE" }}>

        <CardContent sx={{ minHeight: 140 }}>
          <Typography >
            <h4>Question {index + 1}.</h4>{title}
          </Typography>
        </CardContent>

        <CardActions >
          <Grid container item xs={12}>

            <Grid item xs={8}>
              <CustomRadioButton
                options={choice}
                value={answers[data.id]}
                handleChange={(value) => onChangeValue(data.id, value)}
                formClassName={classes.radioStyle}
                labelClassName={classes.labelStyle}
              />{" "}
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default QuestionCard;
