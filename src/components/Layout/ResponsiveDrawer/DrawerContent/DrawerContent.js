import { Typography, Toolbar, Box, List } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawerMenuItem from "./DrawerMenuItem/DrawerMenuItem";
import Cart from "../../../Cart/Cart";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => {
  return {
    usernameToolbar: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      height: 65,
      color: "white",
    },
    userIconContainer: {
      //   color: theme.palette.success.main,
      // marginRight: 10,
      width: 35,
      height: 35,
      borderRadius: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    toolbarUsername: {
      //   color: theme.palette.success.main,
    },
  };
});

const DrawerContent = () => {
  const classes = useStyles();

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Toolbar className={classes.usernameToolbar}>
        <Box sx={{ display: "flex" }}>
            <Box className={classes.userIconContainer}>
              <ShoppingCartIcon />
            </Box>
          <Link to="/cart">
            <Typography variant="h6" className={classes.toolbarUsername}>
              My Cart
            </Typography>
          </Link>
        </Box>
      </Toolbar>
      {/* <Toolbar> */}

      <Cart />

      {/* </Toolbar> */}
    </Box>
  );
};

export default DrawerContent;
