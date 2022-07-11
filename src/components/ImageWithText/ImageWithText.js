import { Box, Typography, Container } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return {
    desktopContainer: {
      width: "100%",
      marginLeft: "auto",
      boxSizing: "border-box",
      marginRight: "auto",
      display: "block",
      paddingLeft: "24px",
      paddingRight: "24px",
      [theme.breakpoints.down("lg")]: {
        marginLeft: "0",
        marginRight: "0",
        paddingLeft: "0",
        paddingRight: "0",
      },
    },
  };
});

const ImageWithText = ({ reverse, imgSrc, sectionText }) => {
  const reversedSection = reverse ? "row-reverse" : "row";
  const classes = useStyles();
  return (
    // <Container>
    <Box
      component="div"
      className={classes.desktopContainer}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        // p: { xs: "0", sm: "0", md: "0", lg: "0 10px" },
        flexDirection: { xs: "column", sm: "column", md: reversedSection },
      }}
    >
      <Box
        component="div"
        sx={{
          width: {xs: "100%", sm: "100%", md: "50%"},
          backgroundColor: "error.light",
          color: "#fff",
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
  // </Container>
  );
};

export default ImageWithText;
