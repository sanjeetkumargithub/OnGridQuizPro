import React from "react";
import Link from "@mui/material/Link";
import "./style.css";
const Newlink = ({ link, body }) => {
  return (
    <Link href={link} variant="body2" id="links">
      {body}
    </Link>
  );
};

export default Newlink;