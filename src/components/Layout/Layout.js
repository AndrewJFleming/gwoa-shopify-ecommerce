import React, { useState } from "react";

import { CssBaseline, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TopNav from "../TopNav/TopNav";
import ResponsiveDrawer from "./ResponsiveDrawer/ResponsiveDrawer";
import Footer from "../Footer/Footer";

const useStyles = makeStyles(() => {
  return {
    pageMain: {
      marginTop: "65px",
    },
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
        component="div"
        sx={{
          flexGrow: 1,

          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        className={classes.pageMain}
      >
        <Box component="main" p={2} style={{ marginBottom: "15px" }}>
          {children}
        </Box>
        <Footer/>
      </Box>
    </Box>
  );
};

export default Layout;
