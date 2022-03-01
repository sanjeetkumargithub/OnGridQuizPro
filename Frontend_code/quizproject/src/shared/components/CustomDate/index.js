import * as React from "react";
import TextField from "@mui/material/TextField";
import moment from 'moment'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  width: {
    '&.MuiFormControl-root': { width: '100%' }
  },

}));
const CustomDate = ({ handleChange, value, error, helperText }) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.width}
      fullWidth
      id="date"
      label="DateOfBirth"
      type="date"

      sx={{ width: 220 }}
      InputLabelProps={{
        shrink: true,
      }}
      value={(value && moment(value).format('YYYY-MM-DD')) || ""}

      onChange={(e) => handleChange(e.target.value)}
      error={error}
      helperText={helperText}
      inputProps={{ max: moment(new Date()).format('YYYY-MM-DD') }}

    />
  );
};
export default CustomDate;
