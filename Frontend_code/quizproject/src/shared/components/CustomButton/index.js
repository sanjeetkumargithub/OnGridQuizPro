import { Button } from "@mui/material";
const btnstyle = { margin: "8px 0" };
const NewButton = ({ name, handleForm }) => {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className="sanjeet"
      style={btnstyle}
      fullWidth
      onClick={() => handleForm()}
    >
      {name}
    </Button>
  );
};
export default NewButton;
