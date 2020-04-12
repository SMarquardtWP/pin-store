import React from "react";
import Popup from "./Popup.js"

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      showPopup: false
    };
  }

  toggleAddPopup(product) {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  addToCart(product) {
    console.log("addToCart()", product);
    // Step 1 : Add to the global cart

    // Step 2 : Route User to next view
  }

  render() {
    const { product } = this.props.location.state;
    return (
      <div className="container">
        <hr className="pb-5" />
        <div className="row p-0 m-0">
          <div className="col-4 text-center pb-3 pt-3">
            <h1>{product.name}</h1>
            <hr />
            <h3>{product.price}</h3>
            <p>{product.description_full}</p>
            <button onClick={() => this.toggleAddPopup(product)}>
              add to cart
              {/* <Link
                to={{
                  pathname: "/cart/",
                  state: {
                    product: product
                  }
                }}
              >
                add to cart
              </Link> */}
            </button>
          </div>
          <div className="col-8 d-flex justify-content-center align-items-center">
            <img className="product_image" src={product.image_product} alt="" />
          </div>
        </div>
        {/* <h1>Product</h1>
        <Link to="/cart/">Cart</Link> */}
        {this.state.showPopup ?
          <Popup
            text="Do you really want to buy this?"
            closePopup={this.toggleAddPopup.bind(this)}
            closePopup={this.addToCart.bind(this)}
          />
          : null
        }
      </div>
    );
  }
}

export default Product;
