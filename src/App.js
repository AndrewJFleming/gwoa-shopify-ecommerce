import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import Layout from "./components/Layout/Layout";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

const customTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#e4f6ec",
          "& a": {
            color: "#835002",
            textDecoration: "none",
          },
          "& a:hover,& a:active": {
            color: "#533900",
            textDecoration: "underline",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#835002",
      light: "#a88a6a",
      dark: "#533900",
    },
    secondary: {
      main: "#d0f6e3",
      light: "#e4f6ec",
      dark: "#7e9c90",
    },
    error: {
      main: "#2d0002",
      light: "#786365",
      dark: "#1c0100",
    },
    warning: {
      main: "#beba6e",
      light: "#d0cbab",
      dark: "#7a7d3d",
    },
    success: {
      main: "#369f03",
      light: "#8bb76d",
      dark: "#196500",
    },
    background: {
      paper: "#fefff9",
    },
  },
  typography: {
    fontFamily: "PT Sans",
    h1: {
      fontFamily: "PT Serif",
    },
    h2: {
      fontFamily: "PT Serif",
    },
    h3: {
      fontFamily: "PT Serif",
    },
    h4: {
      fontFamily: "PT Serif",
    },
    h5: {
      fontFamily: "PT Serif",
    },
    h6: {
      fontFamily: "PT Serif",
    },
    body1: {
      fontFamily: 'PT Sans',
    },
    body2: {
      fontFamily: 'PT Sans',
    },
    button: {
      fontFamily: 'PT Sans',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
    {/* <CssBaseline /> */}
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/products/:handle" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
