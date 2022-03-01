import * as React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import CustomButton from "../../../../shared/components/CustomButton";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  card: {
    background: "#F7ECDE !important"
  },

}));

const CustomCard = ({ title, handleClick }) => {

  const classes = useStyles()

  return (
    <>
      <Grid item xs={3} paddingTop={5} paddingLeft={2} paddingRight={2}>
        <Card className={classes.card}>

          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={5}>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                variant="h5"
                component="div"
              >
                <Grid item xs={7} marginTop={1} > {title}</Grid>
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={3}></Grid>
                <Grid>
                  <CustomButton
                    name="Play Quiz"
                    handleClick={handleClick}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </Card>
      </Grid>
    </>
  );
};

export default CustomCard;