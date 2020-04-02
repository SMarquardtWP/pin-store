import React from "react";
import { Link } from "react-router-dom";
import { DevelopmentCart as UserCart } from "../controllers/CartController";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    // the cart that will be displayed must be a copy of the actual cart. So you can make changes to the amount without risking lasting changes to the stored cart.
    const cart = this.copyCart(this.props.cart);
    this.state = {
      cart: cart
    };
  }

  /**
   * The onChangeHandler for updating products within the state.
   * @param {String} _id - the _id of the product
   * @param {Numver} newAmount
   * @param {Number} index - position of the item within the Cart
   */
  changeProductAmount = (_id, newAmount, index) => {
    const cart = this.state.cart;
    if (cart[index].product._id === _id) {
      cart[index].amount = newAmount;
      this.setState({
        cart: cart
      });
    } else {
      console.log("passed _id and product._id do not match");
      return;
    }
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

  returnEmptyCartView = () => {
    return (
      <p>
        Your cart is empty! Sounds like a good time to{" "}
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
            {UserCart.map((cartItem, index) => {
              return <CartRow key={index} cartItem={cartItem} />;
            })}
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

  render() {
    let cartView;
    if (UserCart.length === 0) {
      cartView = this.returnEmptyCartView();
    } else {
      cartView = this.returnCartView();
    }
    return (
      <div className="text-center">
        <h1>Cart | {UserCart.length}</h1>
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
    // console.log(props.cartItem.amount);
    // const
    this.state = {
      amount: this.props.cartItem.amount,
      _id: this.props.cartItem.product._id
    };
  }

  onChangeHandler = event => {
    event.preventDefault();
    // must be a number

    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => console.log(UserCart)
    );
  };

  render() {
    return (
      <div className="row p-0 m-0 cart_row border-bottom">
        <section className="col-2 d-flex align-items-center">
          <button
            onClick={() =>
              this.props.removeFromCart(this.props.cartItem.product._id)
            }
          >
            remove
          </button>
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
            name="amount"
            value={this.state.amount}
            onChange={this.onChangeHandler}
          />
        </section>
      </div>
    );
  }
}

export default Cart;
