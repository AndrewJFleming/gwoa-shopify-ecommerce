import React from 'react'
import { Link } from "react-router-dom";
import {
  Box,
} from "@mui/material";

import logoImage from "../../../assets/GWoA logo, alt.png";

const LogoLink = ({XSDisplay, MDDisplay}) => {
  return (
    <Link to="/">
    <Box
      component="img"
      sx={{
        width: "40px",
        display: { xs: XSDisplay, md: MDDisplay },
        mr: 1,
        opacity: "0.5",
        filter: "invert(100%)",
        "&:hover": { opacity: ".75" },
        transitionDuration: "0.25s",
      }}
      src={logoImage}
    />
  </Link>
  )
}

export default LogoLink