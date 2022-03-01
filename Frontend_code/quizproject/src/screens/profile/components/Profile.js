import React from "react";
import { Grid, Paper, Avatar } from "@material-ui/core";
import "./style.css";
import {
  CustomInput,
  CustomButton,
  CustomRadioButton,
  CustomDate,
  CustomErrorPopup
} from "../../../shared";
import { gender } from "../../../shared/constants";
import { FormControl } from "@mui/material";

const ProfileComponent = ({ data, handleChange, handleForm, value, error,errorPopup,errorMessage,errorHandleChange  }) => {

  const paperStyle = {
    padding: "20px 60px",
    width: 400,
    margin: "40px auto",
    marginTop: "90px",
    paddingTop: "30px",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "blue" };

  return (
    <Grid container>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar sx={{ m: 1 }} style={avatarStyle}>
            <Grid>
              {" "}
              <Avatar
                src="/broken-image.jpg"
                style={{ backgroundColor: "blue" }}
              />
            </Grid>
          </Avatar>

          <h2 style={headerStyle}>Update Profile</h2>
        </Grid>
        <FormControl>
          <Grid className="profile">
            <CustomInput
              type="text"
              placeholder="Enter name"
              label=""
              value={data.name}
              handleChange={(value) => handleChange(value, "name")}
              error={error.name}
              helperText={error.name}
            />
          </Grid>
          <Grid className="profile">
            <CustomInput
              type="number"
              placeholder="Enter mobile number"
              label=""
              value={data.mobile}
              handleChange={(value) => handleChange(value, "mobile")}
              error={error.mobile}
              helperText={error.mobile}
            />
          </Grid>
          <Grid className="profile">
            <CustomRadioButton
              options={gender}
              label="Gender"
              value={data.gender}
              handleChange={(value) => handleChange(value, "gender")}
            />
          </Grid>
          <Grid className="profile">
            <CustomDate
              value={data.dateOfBirth}
              handleChange={(value) => handleChange(value, "dateOfBirth")}
            />
          </Grid>
          <Grid className="button">
            <CustomButton name="SAVE" handleClick={handleForm} />
          </Grid>
        </FormControl>
      </Paper>
      <CustomErrorPopup open={errorPopup} errorMessage={errorMessage} errorHandleChange={errorHandleChange} />
    </Grid>
  );
};

export default ProfileComponent;
