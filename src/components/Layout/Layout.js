import React, { useState } from "react";

import { CssBaseline, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TopNav from "../TopNav/TopNav";
import ResponsiveDrawer from "./ResponsiveDrawer/ResponsiveDrawer";
import Footer from "../Footer/Footer";

const useStyles = makeStyles((theme) => {
  return {
    pageMain: {
      marginTop: "56px",
      position: "relative",
      minHeight: "100vh",
    },
    contentWrap: {
      paddingBottom: "300px",
      [theme.breakpoints.up("lg")]: {
        marginBottom: "2em"
      },
    }
  };
});

const drawerWidth = 240;

const Layout = ({ children, username }) => {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopNav
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <ResponsiveDrawer
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        className={classes.pageMain}
      >
        <Box component="div" className={classes.contentWrap}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
