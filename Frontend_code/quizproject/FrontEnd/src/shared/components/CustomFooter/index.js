import React from "react";
import "./style.css";
import { Toolbar, Typography } from "@material-ui/core";
const NewFooter = () => {
  return (
    <div id="footer">
      {" "}
      <Toolbar style={{ justifyContent: "center" }} paddingTop={40}>
        <Typography variant="caption">
          {" "}
          <h5 id="footercolor">Quiz Portal ©2022</h5>
          <br />
        </Typography>
      </Toolbar>
    </div>
  );
};
export default NewFooter;
