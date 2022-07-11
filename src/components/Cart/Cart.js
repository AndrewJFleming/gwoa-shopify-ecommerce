import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { Link } from "react-router-dom";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => {
  return {
    drawerCheckoutButton: {
      "& a": {
        textDecoration: "none",
      },
    },
  };
});

const Cart = () => {
  const { checkout, removeLineItem } = useContext(ShopContext);
  
  const classes = useStyles();

  return checkout.lineItems?.length ? (
    <Box sx={{ 
      color: "#fff", 
    width: "100%", pl: "24px" }}>
      {checkout.lineItems.map((item) => (
        <Box
          key={item.title}
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            py: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <Link to={`/products/${item.variant.product.handle}`}>
              {item.title}
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              // width: "100%",
              // justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Typography>${item.variant.price}</Typography>
            <Button color="warning" onClick={() => removeLineItem(item.id)}>
              <DeleteIcon />
            </Button>
          </Box>
        </Box>
      ))}

      <Button variant="contained" color="success" className={classes.drawerCheckoutButton} sx={{ mt: 2 }}>
        <a style={{ color: "#fff" }} href={checkout.webUrl}>
          Checkout
        </a>
      </Button>
    </Box>
  ) : (
    <Box>Cart is empty</Box>
  );
};

export default Cart;
