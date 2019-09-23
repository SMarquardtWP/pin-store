import React from "react";
import { Link } from "react-router-dom";

class Product extends React.Component {
  constructor(props) {
    super(props);
    console.log("here", this.props.location.state);
  }
  render() {
    const { product } = this.props.location.state;
    return (
      <div className="container">
        <hr />
        <div className="row p-0 m-0">
          <div className="col-4 bg-success text-center pb-3 pt-3">
            <p>{product.name}</p>
            <hr />
            <p>{product.amount}</p>
            <p>{product.description_full}</p>
            <button>add to cart</button>
          </div>
          <div className="col-8 bg-primary d-flex justify-content-center align-items-center">
            <img src={product.image_product} alt="" />
          </div>
        </div>
        <h1>Product</h1>
        <Link to="/cart/">Cart</Link>
      </div>
    );
  }
}

export default Product;
