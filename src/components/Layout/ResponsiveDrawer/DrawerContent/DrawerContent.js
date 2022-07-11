import { Typography, Toolbar, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawerMenuItem from "./DrawerMenuItem/DrawerMenuItem";
import Cart from "../../../Cart/Cart";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    drawerContentWrapper: {
      postition: "relative",
      "& a": {
        color: theme.palette.common.white,
        textDecoration: "underline",
      },
      "& a:hover": {
        color: theme.palette.common.white,
        textDecoration: "none",
      },
    },
    usernameToolbar: {
      display: "flex",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      height: 64,
      width: "100%",
    },
    userIconContainer: {
      color: theme.palette.common.white,
      // marginRight: 10,
      width: 35,
      height: 35,
      display: "flex",
      alignItems: "center",
    },
    toolbarUsername: {
      //   color: theme.palette.success.main,
      fontFamily: "h1",
      fontSize: "1.17em",
    },
  };
});

const DrawerContent = () => {
  const classes = useStyles();

  return (
    <Box sx={{ overflow: "hidden" }} className={classes.drawerContentWrapper}>
      <Toolbar className={classes.usernameToolbar}>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Box className={classes.userIconContainer}>
            <ShoppingCartIcon />
          </Box>
          <Link to="/cart" className={classes.toolbarUsername}>
            My Cart
          </Link>
        </Box>
      </Toolbar>
      <Cart />
    </Box>
  );
};

export default DrawerContent;
