import TextField from "@material-ui/core/TextField";
const CustomField = ({ type, label, placeholder, handleChange, value, helperText, error }) => {

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      type={type}
      fullWidth
      required
      value={value}
      error={error}
      onChange={(e) => handleChange(e.target.value)}
      helperText={helperText}
    />
  );
};
export default CustomField;
