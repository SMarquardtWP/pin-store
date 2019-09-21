// import Image from "./assets/temporary_pin_image.png";

// import Photo from "../assets/temporary_pin_image.png";

const Photo = require("../assets/temporary_pin_image.png");

const product1 = {
  product: {
    _id: 1,
    image_main: Photo,
    name: "Cool Pin",
    description_short: "product description limited 64 characters",
    price: "$10.00"
  },
  amount: 1
};
const product2 = {
  product: {
    _id: 2,
    image_main: Photo,
    name: "Neat Pin",
    description_short: "product description limited 64 characters",
    price: "$10.00"
  },
  amount: 2
};
const product3 = {
  product: {
    _id: 3,
    image_main: Photo,
    name: "Dope Pin",
    description_short: "product description limited 64 characters",
    price: "$10.00"
  },
  amount: 3
};
const Cart = [product1, product2, product3];

module.exports = {
  Cart
};
