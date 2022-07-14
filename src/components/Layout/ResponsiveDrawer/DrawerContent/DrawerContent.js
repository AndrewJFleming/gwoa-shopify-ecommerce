import { Toolbar, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
    topToolbar: {
      display: "flex",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      height: 64,
      width: "100%",
      paddingLeft: "24px!important",
      paddingRight: "24px!important"
    },
    toolbarIconContainer: {
      color: theme.palette.common.white,
      width: 35,
      height: 35,
      display: "flex",
      alignItems: "center",
    },
    toolbarTitle: {
      fontFamily: "h1",
      fontSize: "1.17em",
    },
  };
});

const DrawerContent = () => {
  const classes = useStyles();

  return (
    <Box sx={{ overflow: "hidden" }} className={classes.drawerContentWrapper}>
      <Toolbar className={classes.topToolbar}>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Box className={classes.toolbarIconContainer}>
            <ShoppingCartIcon />
          </Box>
          <Link to="/cart" className={classes.toolbarTitle}>
            My Cart
          </Link>
        </Box>
      </Toolbar>
      <Cart />
    </Box>
  );
};

export default DrawerContent;
