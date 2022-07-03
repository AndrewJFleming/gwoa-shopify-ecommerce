import {
    Grid,
    Button,
  } from "@mui/material";
  import DeleteIcon from "@mui/icons-material/Delete";
  import React, { useContext } from "react";
  
  import { ShopContext } from "../context/shopContext";
  
  const CartPage = () => {
    const { checkout, removeLineItem } = useContext(ShopContext);

    return (
        checkout.lineItems?.length ? (
          <div>
            <h2>Cart</h2>
            <Grid
              container
              spacing={3}
              sx={{
                width: "100%",
                margin: "0px",
              }}
            >
              {checkout.lineItems.map((item) => (
                <Grid item md={12} key={item.title}>
                  <h5>{item.title}</h5>
                  <h6>{item.variant.price}</h6>
                  <img
                    style={{ width: "100%" }}
                    src={item.variant.image.src}
                    alt={item.title}
                  />
                  <Button onClick={() => removeLineItem(item.id)}>
                    <DeleteIcon />
                  </Button>
                </Grid>
              ))}
            </Grid>
            <Button variant="contained">
              <a style={{ color: "#fff" }} href={checkout.webUrl}>
                Checkout
              </a>
            </Button>
          </div>
        ) : (
          <div>Cart is empty</div>
        )
        )
  };
  
  export default CartPage;
  