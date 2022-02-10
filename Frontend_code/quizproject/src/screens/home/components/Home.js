import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid } from "@mui/material";
import {  CustomButton } from "../../../shared";
const HomeComponent = () => {
  const btnstyle = { margin: "8px 0" };
  
  return (
    <Grid container height={380}>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Card sx={{ maxWidth: 700 }}>
          <CardActionArea>
            <Grid container>
              <Grid item xs={2}></Grid>
              <Grid item xs={2}>
                <Typography gutterBottom variant="h5" component="div">
                  1
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Quiz Title
                </Typography>
              </Grid>


              <Grid item xs={4}>
                <Grid container>
                  <Grid item xs={4}>
                    {"  "}
                  </Grid>
                  <Grid>
                    {" "}
                    <CustomButton name="play Quiz" />{" "}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};
export default HomeComponent;
