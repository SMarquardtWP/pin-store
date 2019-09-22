import React from "react";
import { Link } from "react-router-dom";

class Product extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state);
  }
  render() {
    return (
      <div className="container">
        <hr />
        <div className="row p-0 m-0">
          <div className="col-4 bg-success text-center">
            <p>title</p>
            <p>line</p>
            <p>amount</p>
            <p>description</p>
            <button>add to cart?</button>
          </div>
          <div className="col-8 bg-primary">
            <p>image here</p>
          </div>
        </div>
        <h1>Product</h1>
        <Link to="/cart/">Cart</Link>
      </div>
    );
  }
}

export default Product;
