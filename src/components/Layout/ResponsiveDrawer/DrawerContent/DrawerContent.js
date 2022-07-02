import { Typography, Toolbar, Box, List } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DrawerMenuItem from "./DrawerMenuItem/DrawerMenuItem";
import Cart from "../../../Cart/Cart";

const useStyles = makeStyles(() => {
  return {
    usernameToolbar: {
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      height: 65,
    },
    userIconContainer: {
      //   color: theme.palette.success.main,
      marginRight: 10,
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
    <Box>
      <Toolbar className={classes.usernameToolbar}>
        <Box sx={{ display: "flex" }}>
          <Box className={classes.userIconContainer}>
            <img
              style={{ width: 40 }}
              src="https://gist.githubusercontent.com/AndrewJFleming/5c7179e2303872b7b71d18cf22ed1910/raw/e1588e345e15f3dc3de55eaa1edefc7a4eca2125/avatarZoomed.svg"
              alt="user placeholder avatar"
            />
          </Box>
          <Typography variant="h6" className={classes.toolbarUsername}>
            Temp
          </Typography>
        </Box>
      </Toolbar>

      <List>
        <DrawerMenuItem path="/cart" icon={<ShoppingCartIcon />} text="Cart" />
      </List>
      <Toolbar>
        <Box sx={{ color: "#fff" }}>
          <Cart />
        </Box>
      </Toolbar>
    </Box>
  );
};

export default DrawerContent;
