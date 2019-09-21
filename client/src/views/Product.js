import React from "react";
import { Link } from "react-router-dom";

class Product extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state);
  }
  render() {
    return (
      <div>
        <h1>Product</h1>
        <Link to="/cart/">Cart</Link>
      </div>
    );
  }
}

export default Product;
