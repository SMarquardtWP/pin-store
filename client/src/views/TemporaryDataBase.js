// import Image from "./assets/temporary_pin_image.png";
// import Photo from "../assets/temporary_pin_image.png";
// DEPRECATED

//const Photo = require("../assets/temporary_pin_image.png");
const Photo1 = require("../assets/ratpin.png");
const Photo2 = require("../assets/pizzapin.png");
const Photo3 = require("../assets/flagpin.png");


const product1 = {
  product: {
    _id: 10001,
    image_main: Photo1,
    image_product: Photo1,
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
    _id: 10002,
    image_main: Photo2,
    image_product: Photo2,
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
    _id: 10003,
    image_main: Photo3,
    image_product: Photo3,
    name: "Dope Pin",
    description_short: "product description limited 64 characters",
    description_full:
      "products full description. Can be up to 270 characters so as to fit nicely in the description box.",
    price: "$10.00"
  },
  amount: 3
};

const Inventory = [product1, product2, product3];

//date format: yyyy_mm_dd_hh_mm_ss

const order1 = {
  _order_id: 600000,
  date_ordered: "2020_02_15_06_31_42",
  shipping_info: {name: "Bob Barker", address1: "2000 Big St", address2: "Apt A", city: "Bumbletown", state:"XY", zip:"11111"},
  email: "BB@priceisright.com",
  products_purchased: [2, 2, 3],
  order_status: "shipped",
  notes: ""
};

const order2 = {
  _order_id: 600001,
  date_ordered: "2020_02_16_03_32_02",
  shipping_info: {name: "Vann Hellsing", address1: "666 Dead Vampire Wy", address2: "Apt 202", city: "Nightvale", state:"TR", zip:"50505"},
  email: "suckthis@silverandgarlic.com",
  products_purchased: [2, 2, 3],
  order_status: "paid",
  notes:""
};

const order3 = {
  _order_id: 600002,
  date_ordered: "2020_02_18_03_02_51",
  shipping_info: {name: "Juice Springsteen", address1: "9001 Energy Rd", address2: "Unit H", city: "Menergy", state:"PT", zip:"12345"},
  email: "kickedintheface@mothernature.com",
  products_purchased: [1],
  order_status: "paid",
  notes: ""
};

const Manifest = [order1, order2, order3]

module.exports = {
  Inventory,
  Manifest
};
