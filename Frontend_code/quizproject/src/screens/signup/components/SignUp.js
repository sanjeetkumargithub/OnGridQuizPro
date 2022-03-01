import React from "react";
import { Grid, Paper, Avatar } from "@material-ui/core";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "./style.css";
import {
  CustomLink,
  CustomInput,
  CustomButton,
  CustomRadioButton,
  CustomDate,
  CustomErrorPopup
} from "../../../shared";
import { FormControl } from "@mui/material";
import { gender } from "../../../shared/constants";

const SignUpComponent = ({ data, handleChange, handleForm, error,errorPopup,errorMessage,errorHandleChange }) => {

  const paperStyle = {
    padding: "25px 55px  10px 55px ",
    width: 400,
    margin: "20px auto",
    paddingTop: "25px",
    marginTop: "90px",
    marginBottom: "30px",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "blue" };

  return (
    <Grid container id="paper" >
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar sx={{ m: 1 }} style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>

          <h2 style={headerStyle}>Sign Up</h2>
        </Grid>
        <FormControl>
          <Grid constainer>
            <Grid className="signup">
              <CustomInput
                type="text"
                placeholder="Please enter name"

                value={data.name}
                handleChange={(value) => handleChange(value, "name")}
                error={error.name}
                helperText={error.name}
              />
            </Grid>
            <Grid className="signup">
              <CustomInput
                type="text"
                placeholder="Enter email id"

                value={data.email}
                handleChange={(value) => handleChange(value, "email")}
                error={error.email}
                helperText={error.email}
              />
            </Grid>
            <Grid className="signup">
              <CustomInput
                type="number"
                placeholder="Enter mobile number"

                value={data.mobile}
                handleChange={(value) => handleChange(value, "mobile")}
                error={error.mobile}
                helperText={error.mobile}
              />
            </Grid>
            <Grid className="signup" >
              <CustomInput
                type="password"
                placeholder="Enter passowrd"

                value={data.password}
                handleChange={(value) => handleChange(value, "password")}
                error={error.password}
                helperText={error.password}
              />
            </Grid>
            <Grid className="signup">
              <CustomInput
                type="password"
                placeholder="Enter confirm password "

                value={data.confirmpassword}
                handleChange={(value) => handleChange(value, "confirmpassword")}
                error={error.confirmpassword}
                helperText={error.confirmpassword}
              />
            </Grid>
            <Grid className="signup">
              <CustomRadioButton
                options={gender}
                label="Gender"
                value={data.gender}
                handleChange={(value) => handleChange(value, "gender")}
              />
            </Grid>
            <Grid className="signup">
              <CustomDate
                value={data.dateOfBirth}
                handleChange={(value) => handleChange(value, "dateOfBirth")}
                error={error.dateOfBirth}
                helperText={error.dateOfBirth}
              />
            </Grid>

            <Grid className="Button">
              {" "}
              <CustomButton name="Sign Up" handleClick={handleForm} />
            </Grid>
            <Grid>
              <Grid container justifyContent="center" className="signuplink">
                <CustomLink
                  body="if you have all ready acount? Login"
                  link="/login"
                />
              </Grid>
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
      <CustomErrorPopup open={errorPopup} errorMessage={errorMessage} errorHandleChange={errorHandleChange} />
    </Grid>
  );
};

export default SignUpComponent;
