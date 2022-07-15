import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { makeStyles } from "@mui/styles";

import { ShopContext } from "../context/shopContext";
import Banner from "../components/Banner/Banner";
import ImageWithText from "../components/ImageWithText/ImageWithText";

const useStyles = makeStyles((theme) => {
  return {
    desktopContainer: {
      [theme.breakpoints.down("lg")]: {
        marginLeft: "0!important",
        marginRight: "0!important",
        paddingLeft: "0!important",
        paddingRight: "0!important",
      },
    },
  };
});

const Home = () => {
  const { fetchAllProducts, addItemToCheckout, products } =
    useContext(ShopContext);
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  const classes = useStyles();
  if (!products) return <div>Loading...</div>;

  return (
    <React.Fragment>
      <Banner />
      <Box component="div" className="page_styles">
        <Container className={classes.desktopContainer}>
          <Grid container>
            {products.map((product) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={3}
                key={product.id}
                sx={{ padding: "10px" }}
              >
                <Card>
                  <Link to={`/products/${product.handle}`}>
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
                      color="secondary.dark"
                    >
                      ID: {product.id.split("/")[4]}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {"$" + product.variants[0].price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      color="success"
                      onClick={() =>
                        addItemToCheckout(product.variants[0].id, 1)
                      }
                      sx={{ color: "#fff", mb: 1 }}
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ marginTop: "3rem" }}>
            <ImageWithText
              reverse={true}
              imgSrc="https://live.staticflickr.com/65535/52204528982_faafda6ee1_k.jpg"
              sectionText="Image accompanying text"
            />
            <ImageWithText
              reverse={false}
              imgSrc="https://live.staticflickr.com/65535/52205539916_16b705d125_k.jpg"
              sectionText="Image accompanying text2"
            />
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Home;
