import React, { useState } from "react";
import { CssBaseline, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TopNav from "../TopNav/TopNav";
import ResponsiveDrawer from "./ResponsiveDrawer/ResponsiveDrawer";

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
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        className={classes.pageMain}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
