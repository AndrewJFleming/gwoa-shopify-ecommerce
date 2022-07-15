import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import transBGLogo from "../../assets/GWoA logo, alt.png";
import QuickLink from "./QuickLink/QuickLink";

const useStyles = makeStyles((theme) => {
  return {
    footerWrapper: {
      "& a": {
        color: "#fff",
        textDecoration: "underline",
      },
      backgroundColor: "#7e9c90",
      height: "300px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      position: "absolute",
      bottom: 0,
      width: "100%",
    },
    footerTopWrapper: {
      padding: "15px",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      height: "100%",
    },
    footerBottomWrapper: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };
});

const Footer = ({ pages }) => {
  const classes = useStyles();
  return (
    <Box className={classes.footerWrapper} component="div">
      <Box component="div" className={classes.footerTopWrapper}>
        <Box component="div" sx={{ display: { xs: "none", sm: "block" } }}>
          <Link to="/">
            <Box
              component="img"
              sx={{ maxHeight: "145px", opacity: "0.5", "&:hover": {opacity: ".75"}, 
              transitionDuration: "0.25s" }}
              src={transBGLogo}
            />
          </Link>
        </Box>
        <Box component="div" sx={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            color="common.white"
            sx={{ opacity: "0.75" }}
          >
            Quick Links
          </Typography>
          <Box component="ul" sx={{ paddingLeft: "0", listStyle: "none" }}>
            <QuickLink page={{ title: "Home", path: "" }} />
            {pages.map((page) => (
              <QuickLink page={page} />
            ))}
          </Box>
          <Button variant="contained">CHECKOUT</Button>
        </Box>
      </Box>

      <Box component="div" className={classes.footerBottomWrapper}>
        <Typography
          textAlign="center"
          color="white"
          w="100%"
          borderTop="1px solid white"
          p="1rem"
          sx={{ opacity: "0.5" }}
        >
          © Copyright Great Wall of Art
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
