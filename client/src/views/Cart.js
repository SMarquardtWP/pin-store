import React from "react";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  returnEmptyCartView = () => {
    return (
      <p>
        Your cart is empty! Soulds like a good time to{" "}
        <span className="text-primary">start shopping</span>
      </p>
    );
  };

  returnCartView = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <hr />
            {this.props.cart.map((product, index) => {
              return <CartRow key={index} product={product} />;
            })}
            <button>update Total</button>
          </div>
          <div className="col-4">
            <hr />
            <p>price of items</p>
            <p>shipping price</p>
            <p>total price</p>
            <button>checkout</button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    let cartView;
    if (this.props.cart.length === 0) {
      cartView = this.returnEmptyCartView();
    } else {
      cartView = this.returnCartView();
    }
    return (
      <div className="text-center">
        <h1>Cart | {this.props.cart.length}</h1>
        {cartView}
        <Link to="/">Main</Link>
        <Link to="/checkout/">Checkout</Link>
      </div>
    );
  }
}

function CartRow(product) {
  return (
    <div className="row p-0 m-0 cart_row">
      <div className="col-2 bg-success">
        <p>X button</p>
      </div>
      <div className="col-2 bg-primary">
        <p>Image</p>
      </div>
      <div className="col-6 text-left bg-warning">
        <p>Title</p>
        <p>Value</p>
        <p>Description</p>
      </div>
      <div className="col-2 bg-info cart_input_container">
        <div className="align-self-center">
          <input className="cart_input" type="text" />
        </div>
      </div>
    </div>
  );
}

export default Cart;
