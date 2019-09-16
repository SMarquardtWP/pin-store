import React from "react";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  render() {
    return (
      <div>
        <h1>Cart</h1>
        <Link to="/">Main</Link>
        <Link to="/checkout/">Checkout</Link>
      </div>
    );
  }
}

export default Cart;
