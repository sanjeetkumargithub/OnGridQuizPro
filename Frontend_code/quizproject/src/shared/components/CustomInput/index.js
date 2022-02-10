import TextField from "@material-ui/core/TextField";

const NewField = ({ type, label, placeholder, handleChange, value }) => {
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      type={type}
      fullWidth
      required
      value={value}
      // error ={true}

      // helperText ="plz corrrect"

      onChange={(e) => handleChange(e.target.value)}
    />
  );
};
export default NewField;

//
