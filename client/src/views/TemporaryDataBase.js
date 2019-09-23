// import Image from "./assets/temporary_pin_image.png";

// import Photo from "../assets/temporary_pin_image.png";

const Photo = require("../assets/temporary_pin_image.png");

const product1 = {
  product: {
    _id: 1,
    image_main: Photo,
    image_product: Photo,
    name: "Cool Pin",
    description_short: "product description limited 64 characters",
    description_full:
      "products full description. Can be up to 270 characters so as to fit nicely in the description box.",
    price: "$10.00"
  },
  amount: 1
};
const product2 = {
  product: {
    _id: 2,
    image_main: Photo,
    image_product: Photo,
    name: "Neat Pin",
    description_short: "product description limited 64 characters",
    description_full:
      "products full description. Can be up to 270 characters so as to fit nicely in the description box.",
    price: "$10.00"
  },
  amount: 2
};
const product3 = {
  product: {
    _id: 3,
    image_main: Photo,
    image_product: Photo,
    name: "Dope Pin",
    description_short: "product description limited 64 characters",
    description_full:
      "products full description. Can be up to 270 characters so as to fit nicely in the description box.",
    price: "$10.00"
  },
  amount: 3
};
const Cart = [product1, product2, product3];

module.exports = {
  Cart
};
