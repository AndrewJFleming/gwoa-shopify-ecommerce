import React from 'react'
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const QuickLink = ({page}) => {
  return (
    <Link to={`/${page.path}`} key={page.title}>
    <Box component="li">
      {page.title}
    </Box>
  </Link>
  )
}

export default QuickLink