import {
  Box,
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
  CardHeader,
} from "@mui/material";
import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import { ShopContext } from "../context/shopContext";

const useStyles = makeStyles((theme) => {
  return {
    desktopContainer: {
      marginBottom: "2rem",
      [theme.breakpoints.down("md")]: {
        marginLeft: "0!important",
        marginRight: "0!important",
        paddingLeft: "0!important",
        paddingRight: "0!important",
      },
    },
  };
});

const ProductPage = () => {
  const { handle } = useParams();
  const { fetchProductWithHandle, addItemToCheckout, product, checkout } =
    useContext(ShopContext);

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  const classes = useStyles();

  if (!product.title) return <div>Loading...</div>;
  return (
    <Container className={classes.desktopContainer}>
      <Grid
        container
        sx={{
          width: "100%",
          margin: "0px",
        }}
      >
        <Grid item xs={12} lg={6} key={`${product.id}_image`}>
          <Box
            sx={{
              w: "300px",
              h: "300px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              mr: { lg: 2 }
            }}
          >
            <Box
              component="img"
              sx={{
                height: "600px",
                width: "auto",
                // pr: { lg: 2 },
              }}
              src={product.images[0].src}
              alt={product.title}
            />
          </Box>
          {/* <Box component="img"
            sx={{ width: "100%", pr: {lg: 2} }}
            src={product.images[0].src}
            alt={product.title}
          /> */}
        </Grid>
        <Grid item xs={12} lg={6} key={`${product.id}_details`}>
          <Card>
            <CardHeader title={product.title} />
            <CardContent>
              <Typography variant="h6">${product.variants[0].price}</Typography>
              <Typography variant="body">{product.description}</Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => addItemToCheckout(product.variants[0].id, 1)}
              >
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
