import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import OrderSuccess from "./pages/OrderSuccess"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";

const App = () => {
  return (
    <Router>
      <SnackbarProvider
        TransitionComponent={Slide}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/order-success" element={<OrderSuccess />} /> {}
        </Routes>
      </SnackbarProvider>
    </Router>
  );
};

export default App;
