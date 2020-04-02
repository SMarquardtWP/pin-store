import React from "react";
import "./App.css";
import Main from "./views/Main";
import Cart from "./views/Cart";
import Product from "./views/Product";
import Checkout from "./views/Checkout";
import Contact from "./views/Contact";
import Admin from "./views/Admin";
import Navbar from "./views/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./views/Footer";
// import TEMPCart from "./controllers/CartController";

import Image from "./assets/temporary_pin_image.png";

const sideColumnClass = "";
const mainColumnClass = "";
// const sideColumnClass = "col-xs-0 col-xl-1  bg-secondary";
// const mainColumnClass = "col-xs-0 col-xl-10";
const product1 = {
  _id: 1,
  description_short: "this is a really nice pin",
  image_small: Image,
  title: "Pin1",
  value: "$10.00"
};
const product2 = {
  _id: 2,
  description_short: "this is another really nice pin",
  image_small: Image,
  title: "Pin2",
  value: "$12.00"
};

const cartItem1 = { product: product1, amount: 1 };
const cartItem2 = { product: product2, amount: 1 };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [cartItem1, cartItem2],
      bool: true
    };
  }

  /**
   * Adds a product to the shopping cart.
   * @param {object} product
   */
  addToCart = product => {
    this.setState(prevState => {
      const newArray = prevState.cart;
      newArray.push(product);
      return { bool: !prevState.bool, cart: newArray };
    });
  };

  /**
   * Used in the Constructor, creates a deep copy of the global cart for this cart. Helps facilitate updating the cart from within the component.
   * @param {object} oldObj - the global cart
   * @returns {object} - deep copy of the global cart
   */
  copyCart = oldObj => {
    var newObj = oldObj;
    if (oldObj && typeof oldObj === "object") {
      newObj =
        Object.prototype.toString.call(oldObj) === "[object Array]" ? [] : {};

      for (var i in oldObj) {
        newObj[i] = this.copyCart(oldObj[i]);
      }
    }
    return newObj;
  };

  /**
   * Removes a product from the shopping cart whose id matches the passed id
   * @param {string} id
   */
  removeFromCart = _id => {
    console.log("App.js removeFromCart()", _id);
    // return _id;

    const oldCart = this.copyCart(this.state.cart);
    const newCart = [];
    // loop over the current cart
    for (let i = 0; i < oldCart.length; i++) {
      if (oldCart[i].product._id !== _id) {
        newCart.push(oldCart[i]);
      }
    }
    // add all products that don't have _id to the new cart
    // set stat of new cart.
    this.setState({
      cart: newCart
    });
  };

  updateCart = newCart => {
    this.setState({
      cart: newCart
    });
  };

  render() {
    return (
      <div id="App" className="container p-0 m-0">
        <div className="row p-0 m-0">
          <div className={sideColumnClass}></div>
          <div className={mainColumnClass}>
            <Router>
              <Navbar />
              <Route
                path="/"
                exact
                render={props => <Main {...props} addToCart={this.addToCart} />}
              />
              <Route
                path="/cart/"
                render={props => (
                  <Cart
                    {...props}
                    cart={this.state.cart}
                    updateCart={this.updateCart}
                    removeFromCart={this.removeFromCart}
                  />
                )}
              />
              <Route path="/checkout/" component={Checkout} />
              <Route path="/product/" component={Product} />
              <Route path="/contact/" component={Contact} />
              <Route path="/admin/" component={Admin} />
              <Footer />
            </Router>
          </div>
          <div className={sideColumnClass}></div>
        </div>
      </div>
    );
  }
}

export default App;
