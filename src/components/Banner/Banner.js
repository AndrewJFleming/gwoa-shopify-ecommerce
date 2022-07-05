import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const BannerBGLink =
  "https://live.staticflickr.com/65535/52092076129_ea52f24095_k.jpg";

const useStyles = makeStyles(() => {
  return {
    bannerContentWrap: {
      backgroundColor: "blue",
      position: "relative",
      "&:before": {
        content: "' '",
        display: "block",
        position: "absolute",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        opacity: "0.3",
        backgroundImage: `url(${BannerBGLink})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 0",
        backgroundSize: "cover",
      },
    },
    bannerContent: {
      position: "relative",
      height: "500px",

      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };
});

const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bannerContentWrap}>
      <Box className={classes.bannerContent}>
        <Typography variant="h2">Welcome</Typography>
        <Button variant="contained">Test</Button>
      </Box>
    </Box>
  );
};

export default Banner;
