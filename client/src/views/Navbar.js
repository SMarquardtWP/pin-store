import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Main</Link>
            <Link to="/product/">Product</Link>
            <Link to="/cart/">Cart</Link>
            <Link to="/checkout/">Checkout</Link>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
