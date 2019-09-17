import React from "react";
import "./App.css";
import Main from "./views/Main";
import Cart from "./views/Cart";
import Product from "./views/Product";
import Checkout from "./views/Checkout";
import Contact from "./views/Contact";
import Navbar from "./views/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./views/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={Main} />
        <Route path="/cart/" component={Cart} />
        <Route path="/checkout/" component={Checkout} />
        <Route path="/product/" component={Product} />
        <Route path="/contact/" component={Contact} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
