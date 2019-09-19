import React from "react";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    const cart = this.copyCart(this.props.cart);
    this.state = {
      cart: cart
    };
  }

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

  updateItemAmount = event => {
    event.preventDefault();
    if (isNaN(event.target.value)) {
      return;
    }
    const cart = this.state.cart;
    const newAmount = event.target.value;
    for (let i = 0; i < this.state.cart.length; i++) {
      const passedID = Number(event.target.name);
      const cartID = Number(cart[i].product._id);
      if (passedID === cartID) {
        cart[i].amount = Number(newAmount);
      }
    }
    this.setState({
      cart: cart
    });
  };

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
            {this.state.cart.map((cartItem, index) => {
              return (
                <CartRow
                  key={index}
                  cartItem={cartItem}
                  updateItemAmount={this.updateItemAmount}
                />
              );
            })}
            <button
              className="mt-4"
              onClick={() => this.props.updateCart(this.state.cart)}
            >
              update cart
            </button>
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
        <h1>Cart | {this.state.cart.length}</h1>
        <div className="mb-4">{cartView}</div>
        <Link to="/">Main</Link>
        <Link to="/checkout/">Checkout</Link>
      </div>
    );
  }
}

class CartRow extends React.Component {
  constructor(props) {
    super(props);
    // const
    this.state = {
      amount: this.props.cartItem.amount
    };
  }

  onChangeHander = event => {
    event.preventDefault();
    // must be a number

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="row p-0 m-0 cart_row border-bottom">
        <section className="col-2 d-flex align-items-center">
          <p>Remove</p>
        </section>
        <section className="col-2 d-flex align-items-center justify-content-center">
          <img
            className="cart_row_image"
            src={this.props.cartItem.product.image_small}
            alt=""
          />
        </section>
        <section className="col-6 text-left d-flex align-items-center">
          <div>
            <p className="pt-0 pl-0 pr-0 pb-1 m-0 text-danger">
              {this.props.cartItem.product.title}
            </p>
            <p className="p-0 m-0">{this.props.cartItem.product.value}</p>
            <p className="p-0 m-0 font-italic text-secondary">
              {this.props.cartItem.product.description_short}
            </p>
          </div>
        </section>
        <section className="col-2 cart_input_container d-flex align-items-center justify-content-center">
          <input
            className="cart_input"
            type="text"
            name={this.props.cartItem.product._id}
            value={this.props.cartItem.amount}
            onChange={this.props.updateItemAmount}
          />
        </section>
      </div>
    );
  }
}

export default Cart;
