import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import CustomButton from "../../../shared/components/CustomButton";

const CardComponent = ({ title, handleClick }) => {
  return (
    <>
      <Grid item xs={3} paddingTop={5} paddingLeft={2} paddingRight={2}>
        <Card style={{ backgroundColor: "#F7ECDE"}}>
          <CardActionArea>
            <Grid container>
              <Grid item xs={2}></Grid>
              <Grid item xs={3}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  <Grid marginTop={1} style={{ color:"black"}}> {title}</Grid>
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Grid container>
                  <Grid item xs={3}></Grid>
                  <Grid>
                    <CustomButton
                      name="play Quiz"
                      handleClick={handleClick}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default CardComponent;
