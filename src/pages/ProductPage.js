import {
  Box,
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
} from "@mui/material";
import React, { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { ShopContext } from "../context/shopContext";

const ProductPage = () => {
  const { handle } = useParams();
  const { fetchProductWithHandle, addItemToCheckout, product, checkout } =
    useContext(ShopContext);

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  // console.log(product.variants[0].id)
  // console.log(checkout.lineItems[0].id)

  if (!product.title) return <div>Loading...</div>;
  return (
    <div className="page_styles">
      <Grid
        container
        sx={{
          width: "100%",
          margin: "0px",
        }}
      >
        <Grid item xs={12} lg={6} key={`${product.id}_image`}>
          <Box component="img"
            sx={{ width: "100%", pr: {lg: 2} }}
            src={product.images[0].src}
            alt={product.title}
          />
        </Grid>
        <Grid item xs={12} lg={6} key={`${product.id}_details`}>
          <Card>
            <CardHeader title={product.title} />
            <CardContent>
              <Typography variant="h6">${product.variants[0].price}</Typography>
              <Typography variant="body">{product.description}</Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => addItemToCheckout(product.variants[0].id, 1)}>Add To Cart</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPage;
