import { Box, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
  return {
    centeringContainer: {
      position: "relative",
    },
    centeredContent: {
      margin: "0",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
    },
  };
});

const ImageWithText = ({ reverse, imgSrc, sectionText }) => {
  const reversedSection = reverse ? "row-reverse" : "row";
  const classes = useStyles();
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 10px",
        flexDirection: { xs: "column", sm: "column", md: reversedSection },
      }}
    >
      <Box
        component="div"
        sx={{
          width: {xs: "100%", sm: "100%", md: "50%"},
          backgroundColor: "lightblue",
          padding: "15px",
          textAlign: "center",
        }}
        // className={classes.centeringContainer}
      >
        <Box component="div" 
        // className={classes.centeredContent}
        >
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
