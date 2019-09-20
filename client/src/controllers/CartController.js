const cart = [];

function addToCart(cart, product) {
  // add to cart
  cart.push(product);
  // sort cart based on id
  cart.sort((a, b) => a.product._id - b.product._id);
}

// {product: object, amount : string}
function removeFromCart(cart, productID) {
  // loop over cart
  for (let i = 0; i < cart.length; i++) {
    const cartItem = cart[i];
    if (cartItem.product._id === productID) {
      cart.splice(i, 1);
    }
  }
}

function updateAmount() {}

module.exports = {
  cart,
  addToCart,
  removeFromCart,
  updateAmount
};
