import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Tooltip,
  Button,
  Box,
  Menu,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import logoImage from "../../assets/GWoA logo, alt.png";

import { ShopContext } from "../../context/shopContext";

import { makeStyles } from "@mui/styles";
import LogoLink from "./LogoLink/LogoLink";

const useStyles = makeStyles((theme) => {
  return {
    headerLogo: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.down("md")]: {
        display: "flex",
      },
      //Shared styles
      textDecoration: "none",
      mr: 2,
      fontFamily: "PT Sans Narrow",
      fontWeight: 700,
      letterSpacing: ".3rem",
      whiteSpace: "no-wrap",
      fontSize: "1.5em",
      color: theme.palette.error.main,
      "&:hover": {
        color: theme.palette.common.black,
        textDecoration: "none"
      },
    },
    //Style override for medium logo
    headerLogoMd: {
      flexGrow: 0,
      display: "flex",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    TopNavLinkItem: {
      "& a": {
        color: theme.palette.primary.main,
      },
      "& a:hover": {
        textDecoration: "none",
      },
    },
  };
});

const TopNav = ({ handleDrawerToggle, drawerWidth, pages }) => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "success.light",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
                <LogoLink XSDisplay="none" MDDisplay="flex"/>
            <Link
              to="/"
              className={`${classes.headerLogo} ${classes.headerLogoMd}`}
            >
              Great Wall of Art
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleDrawerToggle}
                sx={{ color: "error.dark", mr: 2, display: { sm: "none" } }}
              >
                <ShoppingCartIcon />
              </IconButton>
            </Box>
            <LogoLink XSDisplay="flex" MDDisplay="none"/>
            <Link to="/" className={classes.headerLogo}>
              Great Wall of Art
            </Link>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              className={classes.TopNavLinkItem}
            >
              {pages.map((page) => (
                <Link to={`/${page.path}`}>
                  <Button
                    key={page.title}
                    onClick={handleCloseNavMenu}
                    sx={{ color: "common.black", display: "block" }}
                  >
                    {page.title}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" }  }}>
              <Tooltip title="Page Links">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <MenuIcon />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {pages.map((page) => (
                  <Link to={`/${page.path}`}>
                    <MenuItem key={page.title} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{page.title}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default TopNav;
