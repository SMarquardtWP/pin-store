/*

PossibleDeprecaed!!!
*/

const Cart = [];

const product1 = { product: { _id: 1 }, amount: 1 };
const product2 = { product: { _id: 2 }, amount: 2 };
const product3 = { product: { _id: 3 }, amount: 3 };
const DevelopmentCart = [product1, product2, product3];

/**
 * Adds a product to the cart.
 * @param {Array} cart
 * @param {Object} product
 */
export function addToCart(cart, product) {
  // add to cart
  cart.push(product);
  // sort cart based on id
  cart.sort((a, b) => a.product._id - b.product._id);
}

/**
 * Removes the product whose _id matches the passed _id from the cart.
 * @param {Array} cart
 * @param {String} _id
 */
export function removeFromCart(cart, _id) {
  // loop over cart
  for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    if (cartItem.product._id === _id) {
      cart.splice(i, 1);
    }
  }
}

/**
 * Updates the amount a user wants to purchase of an existing product inside of the cart.
 * @param {Array} cart
 * @param {String} _id - the id of the product whose amount will be changed
 * @param {Number} newAmount - the new amount the user wants to purchase
 */
export function updateAmount(cart, _id, newAmount) {
  // loop over cart
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i].product;
    // identify the product whose id matches
    if (product._id === _id) {
      // update the newAMount
      cart[i].amount = newAmount;
      return;
    }
  }
}

// class DevelopmentCart extends React.Component {
// constructor() {
//   super();
//   this.state = {

//   };
// }


// <Navbar />
//   <Route
//     path="/"
//     exact
//     render={props => <Main {...props} addToCart={this.addToCart} />}
//   />
//   <Route
//     path="/cart/"
//     render={props => (
//       <Cart
//         {...props}
//         cart={this.state.cart}
//         updateCart={this.updateCart}
//         removeFromCart={this.removeFromCart}
//       />
//     )}
//   />
//   <Route path="/checkout/" component={Checkout} />
//   <Route path="/product/" component={Product} />
//   <Route path="/contact/" component={Contact} />
//   <Route path="/admin/" component={Admin} />
//   <Footer />
// }

// export default DevelopmentCart;

