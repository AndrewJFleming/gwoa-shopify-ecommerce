import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { ShopContext } from "../../context/shopContext";

const TopNav = ({ handleDrawerToggle, drawerWidth }) => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: "error.main",
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        <Link to="/">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
        </Link>
        <Link to="/cart">
        <IconButton
          size="large"
          // edge="start"
          color="inherit"
          aria-label="menu"
          // sx={{ mr: 2 }}
        >
          <ShoppingCartIcon/>
        </IconButton>
        </Link>
          <span >({checkout.lineItems?.length})</span>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
