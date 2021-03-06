import {
  Grid,
  Card,
  Button,
  Box,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Container
} from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useContext } from "react";

import { ShopContext } from "../context/shopContext";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => {
  return {
    contentWrapper: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
    },
    buttonWrapper: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      pl: 1,
      pb: 1,
    },
  };
});

const CartPage = () => {
  const { checkout, removeLineItem } = useContext(ShopContext);
  const classes = useStyles();

  return checkout.lineItems?.length ? (
    <Container sx={{py: 2}}>
      <Typography variant="h4">Cart</Typography>
      <Grid container mt={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          lg={8}
          sx={{ pr: { xs: 0, sm: 0, md: 2, lg: 2 }, mb: 2 }}
        >
          {checkout.lineItems.map((item) => (
            <Card sx={{ display: "flex", marginBottom: 2, height: 151, boxSizing: "border-box" }}>
              <Link to={`/products/${item.variant.product.handle}`}>
                <CardMedia
                  component="img"
                  sx={{ width: 151, height: 151 }}
                  image={item.variant.image.src}
                  alt={item.title}
                />
              </Link>
              <Box className={classes.contentWrapper}>
                <CardContent sx={{ flex: "1 0 auto", pb: 0 }}>
                  <Link to={`/products/${item.variant.product.handle}`}>
                    <Typography component="div" variant="h6">
                      {item.title}
                    </Typography>
                  </Link>
                  <Typography variant="h6">${item.variant.price}</Typography>
                </CardContent>
                <Box className={classes.buttonWrapper}>
                  <IconButton
                    aria-label="Remove from favorites"
                    onClick={() => removeLineItem(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={4}>
          <Card sx={{  mb: 2, backgroundColor: "warning.dark", color: "common.white" }}>
            <CardContent sx={{  pb: 0 }}>
              <Typography
                variant="h6"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <span>Subtotal:&nbsp;</span>
                <span>${checkout.subtotalPrice}</span>
              </Typography>
              <hr />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Total:&nbsp;</span>
                <span>${checkout.totalPrice}</span>
              </Typography>
            </CardContent>
            <CardActions sx={{pt: 2}}>
          <Button variant="contained" color="error">
            <a style={{ color: "#fff" }} href={checkout.webUrl}>
              Checkout
            </a>
          </Button>

            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  ) : (
    <Box>Cart is empty</Box>
  );
};

export default CartPage;
