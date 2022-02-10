import React from "react";
import { Grid, Paper, Avatar, Typography, TextField } from "@material-ui/core";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  CustomLink,
  CustomInput,
  CustomButton,
  CustomRadioButton,
  CustomDate,
} from "../../../shared";
import { FormControl } from "@mui/material";
import { gender } from "../../../shared/constants";

const SignUpComponent = ({ data, handleChange, handleForm }) => {
  const paperStyle = {
    padding: "20px 60px",
    width: 400,
    margin: "20px auto",
    
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  //const marginTop = { marginTop: 5 }
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid container >
      <Paper elevation={20} style={paperStyle} >
        <Grid align="center">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>

          <h2 style={headerStyle}>Sign Up</h2>
         
        </Grid>
        <FormControl height={100}>
          <CustomInput
            type="text"
            placeholder="Enter  Name"
            label="Name"
            value={data.name}
            handleChange={(value) => handleChange(value, "name")}
          />
          <CustomInput
            type="text"
            placeholder="Enter  Email Id"
            label="Email id"
            value={data.email}
            handleChange={(value) => handleChange(value, "email")}
          />

          <CustomInput
            type="number"
            placeholder="Enter  Mobile Number"
            label="Mobile Number"
            value={data.mobile}
            handleChange={(value) => handleChange(value, "mobile")}
          />

          <CustomInput
            type="password"
            placeholder="Enter passowrd"
            label="password"
            value={data.password}
            handleChange={(value) => handleChange(value, "password")}
          />

          {/* <Input
            type="password"
            placeholder="Enter Confirm Password "
            label="Confirm password"
            value={data.confirmPassword}
            handleChange={(value) => handleChange(value, "confirmPassword")}
          /> */}
          <Grid  >
          <CustomRadioButton options={gender} label="Gender"
          
          value={data.gender}
          handleChange={(value) => handleChange(value, "gender")}
          />
          </Grid>

          <CustomDate
            value={data.DateOfBirth}
            handleChange={(value) => handleChange(value, "dateOfBirth")}
          />

          <CustomButton name="Sign Up" handleForm={handleForm} />
          <Grid>
            <Grid container justifyContent="center">
              <CustomLink
                body="if you have all ready acount? LoginKnow"
                link="/login"
              />
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default SignUpComponent;
