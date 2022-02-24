import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid } from "@mui/material";
import { CustomRadioButton } from "../..";
import { choice } from "../../constants";
const QuestionCard = ({ title,  data, onChangeValue, answers }) => {
  return (
    <Grid item xs={4} paddingLeft={5} paddingTop={5}>
      <Card sx={{ maxWidth: 450 }} style={{ backgroundColor: "#F7ECDE" }}>
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container item xs={12}>
            <Grid item xs={4}></Grid>
              <Grid item xs={8}> 
              <CustomRadioButton
                options={choice}
                value={answers[data.id]}
                handleChange={(value) => onChangeValue(data.id, value)}
              />{" "}
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default QuestionCard;
