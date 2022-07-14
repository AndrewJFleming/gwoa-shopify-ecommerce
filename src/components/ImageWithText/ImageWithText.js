import { Box, Typography, Container } from "@mui/material";
import React from "react";

const ImageWithText = ({ reverse, imgSrc, sectionText }) => {
  const reversedSection = reverse ? "row-reverse" : "row";
  return (

    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "column", md: reversedSection },
      }}
    >
      <Box
        component="div"
        sx={{
          width: {xs: "100%", sm: "100%", md: "50%"},
          backgroundColor: "warning.dark",
          color: "common.white",
          padding: "15px",
          textAlign: "center",
        }}
      >
        <Box component="div" 
        sx={{display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "center"}}>
          <Typography variant="h4">ImageWithText</Typography>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </Typography>
        </Box>
      </Box>
      <Box component="img" sx={{ width: {xs: "100%", sm: "100%", md: "50%"}}} src={imgSrc} alt={sectionText} />
    </Box>
  );
};

export default ImageWithText;
