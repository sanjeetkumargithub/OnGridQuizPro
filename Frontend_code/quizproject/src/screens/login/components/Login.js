import React from "react";
import { Grid, Paper, Avatar } from "@material-ui/core";
import "./style.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { CustomLink, CustomButton, CustomInput ,CustomErrorPopup} from "../../../shared";

const LoginComponent = ({ data, handleChange, handleForm, error,errorPopup,errorMessage,errorHandleChange }) => {

  const paperStyle = {
    padding: 20,
    width: 420,
    margin: "20px auto",
    marginTop: 80,
    paddingTop: 25,
  };

  const avatarStyle = { backgroundColor: "blue" };

  return (
    <>
      <Grid style={paperStyle}>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar sx={{ m: 1 }} style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Login</h2>
          </Grid>
          <Grid>
            <CustomInput
              type="text"
              placeholder="Enter email id"

              value={data.email}
              handleChange={(value) => handleChange(value, "email")}
              error={error.email}
              helperText={error.email}
            />
          </Grid>
          <Grid className="loginspace">
            <CustomInput
              type="password"
              placeholder="Enter password"

              value={data.password}
              handleChange={(value) => handleChange(value, "password")}
              error={error.password}
              helperText={error.password}
            />
          </Grid>
          <Grid id="loginButton">
            <CustomButton name="Login" handleClick={handleForm} />
          </Grid>
          <Grid container justifyContent="center">
            <CustomLink body="Don't have an account? Sign Up" link="/signup" />
          </Grid>
        </Paper>
        <CustomErrorPopup open={errorPopup} errorMessage={errorMessage} errorHandleChange={errorHandleChange} />
      </Grid>
     
    </>
  );
};

export default LoginComponent;
