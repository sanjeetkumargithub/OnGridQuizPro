import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid } from "@mui/material";
import { CustomCard } from "../../../shared";
const HomeComponent = ({ data, handleClick }) => {
  return (
    <>
      <Grid
        container
        item
        xs={12}
        marginTop={5}
        paddingTop={5}
        marginBottom={5}
        paddingBottom={5}
      >
        {data.length > 0 ? (
          data.map((item) => (
            <CustomCard
              title={item.title}
              handleClick={() => handleClick(item.id)}
            />
          ))
        ) : (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </Grid>
    </>
  );
};
export default HomeComponent;
