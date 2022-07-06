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
  Container
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import logoImage from './logo.png'

import { ShopContext } from "../../context/shopContext";

const pages = [
  {title: "Cart", path: "cart"}, 
  {title: "About", path: "about"}, 
];

const TopNav = ({ handleDrawerToggle, drawerWidth }) => {
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

  return (
       <React.Fragment>
    {/* <AppBar
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
    </AppBar> */}


    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: "error.main",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
      <Link to="/">
          <Box component="img" sx={{ width: "40px", display: { xs: 'none', md: 'flex' }, mr: 1 }} src={logoImage}/>
    </Link>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
            <Link to="/">
            LOGO
          </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <ShoppingCartIcon />
            </IconButton>
           
          </Box>
          <Link to="/">
          <Box component="img" sx={{ width: "40px", display: { xs: 'flex', md: 'none' }, mr: 1 }} src={logoImage}/>
          </Link>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
            <Link to="/">
            LOGO
              </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={`/${page.path}`}>
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', display: 'block' }}
                >
                {page.title}
              </Button>
                </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Page Links">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0
                }}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
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
