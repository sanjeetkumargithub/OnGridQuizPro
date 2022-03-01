import { Button } from "@mui/material";

const btnstyle = { margin: "8px 0" };
const CustomButton = (props) => {
  const { name, id, handleClick } = props;
  return (
    <Button

      variant="contained"
      color="primary"

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
export default CustomButton;
