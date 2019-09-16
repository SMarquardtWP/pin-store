import React from "react";
import "./App.css";
import Main from "./views/Main";
import Cart from "./views/Cart";
import Product from "./views/Product";
import Checkout from "./views/Checkout";
import Contact from "./views/Contact";
import Navbar from "./views/Navbar";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function MainRoute() {
  return <Main />;
}

function ProductRoute() {
  return <Product />;
}

function CartRoute() {
  return <Cart />;
}

function CheckoutRoute() {
  return <Checkout />;
}

function ContactRoute() {
  return <Contact />;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={MainRoute} />
        <Route path="/cart/" component={CartRoute} />
        <Route path="/checkout/" component={CheckoutRoute} />
        <Route path="/product/" component={ProductRoute} />
        <Route path="/contact/" component={ContactRoute} />
      </Router>
    </div>
  );
}

export default App;
