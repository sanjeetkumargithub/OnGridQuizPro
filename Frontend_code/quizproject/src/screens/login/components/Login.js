import React from "react";
import { Grid, Paper, Avatar } from "@material-ui/core";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { CustomLink, CustomButton, CustomInput } from "../../../shared";
const LoginComponent = ({ data, handleChange, handleForm }) => {
  const paperStyle = {
    padding: 40,
    height: "45vh",
    width: 420,
    margin: "20px auto",
    paddingTop:"20px",
    
    
  };

  const gridStyle = {
  
    height: "80vh",
      //paddingTop:"40px"
    
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    
    <Grid  style={paperStyle} >
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center" >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>

          <h2>Login In</h2>
        </Grid>

        <CustomInput
          type="text"
          placeholder="Enter  Email Id"
          label="Email id"
          value={data.email}
          handleChange={(value) => handleChange(value, "email")}
        />
        <CustomInput
          type="password"
          placeholder="Enter  password"
          label="password"
          value={data.password}
          handleChange={(value) => handleChange(value, "password")}
        />

        <CustomButton name="Login" handleForm={handleForm} />

        <Grid container justifyContent="center">
          <CustomLink body="Don't have an account? Sign Up" link="/signup" />
        </Grid>
      </Paper>
    </Grid>
    
  );
};

export default LoginComponent;
