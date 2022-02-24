import { Button } from "@mui/material";
const btnstyle = { margin: "8px 0" };
const NewButton = ({ name, id, handleClick }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      className="sanjeet"
      style={btnstyle}
      bgcolor="blue"
      fullWidth
      onClick={handleClick}
      id={id}
    >
      {name}
    </Button>
  );
};
export default NewButton;
