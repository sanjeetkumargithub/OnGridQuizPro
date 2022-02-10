import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid } from "@mui/material";
import { CustomRadioButton, CustomButton } from "../../../shared";
import { choice } from "../../../shared/constants";

const QuizComponent = ({}) => {
  const btnstyle = { margin: "8px 0" };

  return (
    <Grid container height={310} marginTop={10}>
      <Grid item xs={4} justifyContent="center" paddingLeft={5}>
        <Card sx={{ maxWidth: 450 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Grid container>
              <Grid item xs={4}></Grid>

              <Grid item xs={6}>
                {" "}
                <CustomRadioButton options={choice} />{" "}
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid>
      {/* 
      <Grid item xs={4} paddingLeft={4}>
        <Card sx={{ maxWidth: 450 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
           
            <Grid container>
              <Grid item xs={4}></Grid>

              <Grid item xs={6}>
                {" "}
                <CustomRadioButton options={choice} />{" "}
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid> 


       <Grid item xs={4}paddingLeft={2}>
        <Card sx={{ maxWidth: 450 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Grid container>
              <Grid item xs={4}></Grid>

              <Grid item xs={6}>
                <CustomRadioButton options={choice} />{" "}
              </Grid>
            </Grid>
          </CardActions>
        </Card>
      </Grid> */}
      <Grid container>
        <Grid item xs={5}>
          {" "}
        </Grid>
        <Grid item xs={2}>
          <CustomButton name="Submit Quiz" />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default QuizComponent;
