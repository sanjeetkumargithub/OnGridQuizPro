import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";

const NewFooter = () => {
  return (
    <>
      <Grid container justify="center" style={{ minHeight: "212px" }}>
        <Grid container item sm={6} xs={11} justify="space-between"></Grid>
      </Grid>
      <AppBar
        position="static"
        elevation={0}
        component="footer"
        color="default"
      >
        <Toolbar style={{ justifyContent: "center" }}>
          <Typography variant="caption">
            {" "}
            quiz Portal Developed by sanjeet kumar OnGrid ©2020
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default NewFooter;
