import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  CardHeader,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { checkout, removeLineItem } = useContext(ShopContext);

  return checkout.lineItems?.length ? (
    <Box sx={{ color: "#fff", width: "100%", pl: "24px"}}>
      {checkout.lineItems.map((item) => (
        <Box
          key={item.title}
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            py: 1
            
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-start",
            }}
          >
            {/* <Link to="/"> */}
            <Typography>
            <Link to={`/products/${item.variant.product.handle}`}>
              {item.title}
            </Link>
            {/* &nbsp;
            <span>x{item.quantity}</span> */}
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", width: "100%", justifyContent: "flex-end", alignItems: "center" }}
          >
            <Typography>${item.variant.price}</Typography>
            <Button onClick={() => removeLineItem(item.id)}>
              <DeleteIcon />
            </Button>
          </Box>
        </Box>
      ))}

      <Button variant="contained" sx={{mt: 2}}>
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
