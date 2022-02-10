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
import { gender } from "../../../shared/constants";
const ProfileComponent = ({ data, handleChange }) => {
  const paperStyle = {
    padding: "30px 20px",
    width: 400,
    margin: "20px auto",
    height: "60vh",

  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid container  height="100vh">
      <Paper elevation={20} style={paperStyle} >
        <Grid align="center">
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>

          <h2 style={headerStyle}>Update Profile</h2>
          <Typography variant="caption" gutterBottom>
            Please update account !
          </Typography>
        </Grid>
        <form>
          <CustomInput
            type="text"
            placeholder="Enter  Name"
            label="Name"
            value={data.name}
            handleChange={(value) => handleChange(value, "name")}
          />

          <CustomInput
            type="number"
            placeholder="Enter  Mobile Number"
            label="Mobile Number"
            value={data.mobile}
            handleChange={(value) => handleChange(value, "mobile")}
          />

          <CustomRadioButton options={gender} label="Gender" />
          <CustomDate
            value={data.DateOfBirth}
            handleChange={(value) => handleChange(value, "DateOfBirth")}
          />

          <CustomButton name="UpdateProfile" />
         
        </form>
      </Paper>
    </Grid>
  );
};

export default ProfileComponent;
