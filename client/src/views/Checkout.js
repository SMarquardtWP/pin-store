import React from "react";
import { Link } from "react-router-dom";

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <h1>Checkout</h1>
        <Link to="/">Main</Link>
        <Link to="/cart/">Cart</Link>
      </div>
    );
  }
}

export default Checkout;
