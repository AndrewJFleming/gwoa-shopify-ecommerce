import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Grid,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
  import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { ShopContext } from "../context/shopContext";

const Home = () => {
  const { fetchAllProducts, addItemToCheckout, products } = useContext(ShopContext);
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;

  return (
    <div>
      <Grid
        container
        spacing={3}
        sx={{
          width: "100%",
          // margin: "0px",
        }}
      >
        {products.map((product) => (
          <Grid item xs={12} sm={12} md={6} lg={3} key={product.id}>
            <Card 
            sx={{ 
              // maxWidth: "345px"
             }}
            >
              <Link
                to={`/products/${product.handle}`}
                // className={classes.productLink}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={product.images[0].src}
                  alt={"A preview of " + product.title}
                />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="success.dark"
                  component="div"
                >
                  ID: {product.id}
                </Typography>
                {/* <Typography variant="body2" gutterBottom>
                  {product.desc.length <= 119
                    ? product.desc
                    : `${product.desc.substring(0, 120)}...`}
                </Typography> */}
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{
                    justifySelf: "center",
                    alignSelf: "center",
                    textAlign: "center",
                    margin: "20px 0px 30px 0px",
                  }}
                >
                  {"Price:  $" + product.variants[0].price}
                </Typography>

                <CardActions>
                  <Button
                    size="small"
                 onClick={() => addItemToCheckout(product.variants[0].id, 1)}
                    sx={{ color: "primary.main" }}
                  >
                    <ShoppingCartIcon /> <span>Add to Cart</span>
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
