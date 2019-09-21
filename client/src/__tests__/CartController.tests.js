import CartController from "../controllers/CartController";

describe("CartController Unit Tests", () => {
  const product1 = { product: { _id: 1 }, amount: 1 };
  const product2 = { product: { _id: 2 }, amount: 2 };
  const product3 = { product: { _id: 3 }, amount: 3 };

  test("addToCart()", () => {
    // basic single product
    const cart = [];
    CartController.addToCart(cart, product1);
    const expected = [product1];
    expect(cart).toEqual(expected);

    // two additional adds, w/ organization based on _id
    CartController.addToCart(cart, product3);
    CartController.addToCart(cart, product2);
    const expected2 = [product1, product2, product3];
    expect(cart).toEqual(expected2);
  });

  test("removeFromCart()", () => {
    const cart = [product1, product2, product3];
    const expected = [product1, product3];
    CartController.removeFromCart(cart, product2.product._id);
    expect(cart).toEqual(expected);
  });

  test("updateAmount()", () => {
    const cart = [product1, product2, product3];
    CartController.updateAmount(cart, 2, 5);
    const product2Updated = { product: { _id: 2 }, amount: 5 };
    const expected = [product1, product2Updated, product3];
    expect(cart).toEqual(expected);
  });
});
