import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid } from "@mui/material";
import { RadioButton, CustomButton, CustomLink } from "../../../shared";
const ScoreComponent = () => {
  const btnstyle = { margin: "8px 0" };

  return (
    <Grid container height={368} paddingTop={13}>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Card sx={{ maxWidth: 700 }}>
          <CardActionArea>
            <Grid item xs={2}>
              {" "}
            </Grid>
            <Grid item marginLeft={5} paddingLeft={14}>
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                variant="h4"
                component="div"
              >
                 <Grid paddingLeft={20} paddingBottom={5}> Quiz Score <br/></Grid> 
                Total Marks =10
                <br />
                Number of correct question =3
                <br />
                Number of incorrect question =5
                <Grid container paddingLeft={50}>
                  <Grid item xs={11}>
                    {" "}
                  </Grid>
                  <Grid item xs={8}>
                    {" "}
                    <CustomLink body="Attempt next Quiz" link="/home" />
                  </Grid>
                </Grid>
              </Typography>
            </Grid>

            <Grid item xs={3}></Grid>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};
export default ScoreComponent;
