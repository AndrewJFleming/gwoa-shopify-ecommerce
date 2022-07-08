import React from 'react'
import { Link } from "react-router-dom";
import {  Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
          component="div"
          style={{
            backgroundColor: "darkblue",
            height: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          <Box
            component="div"
            style={{
              padding: "15px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              height: "100%"
            }}
          >
            <Box component="div" sx={{display: {xs: "none", sm: "block"}}}>
              <img
                style={{ maxHeight: "145px" }}
                src="https://cdn.shopify.com/s/files/1/0472/5705/9496/files/Bath_Bomb_-_Product-5_-_trans_1.png?v=1610123549"
              />
            </Box>
            <Box component="div" sx={{ textAlign: "center" }}>
              <Typography variant="h5">Quick Links</Typography>
              <ul style={{ paddingLeft: "0", listStyle: "none" }}>
                <Link to="/">
                  <li>Test</li>
                </Link>
                <Link to="/">
                  <li>Test</li>
                </Link>
                <Link to="/">
                  <li>Test</li>
                </Link>
              </ul>
            </Box>
          </Box>

          <Box component="div" sx={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
            <Typography
              textAlign="center"
              color="white"
              w="100%"
              borderTop="1px solid white"
              p="1rem"
            >
              © Copyright Great Wall of Art
            </Typography>
          </Box>
        </Box>
  )
}

export default Footer