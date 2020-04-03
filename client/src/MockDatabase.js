//const Photo = require("../temporary_pin_image.png");
const Photo1 = require("../ratpin.png");
const Photo2 = require("../temporary_pin_image.png");
const Photo3 = require("../temporary_pin_image.png");

const product1 = {
  product: {
    _id: 1,
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

/*const order1 = {
  orderID: "",
  status: "", //Integer
  contactInformation: {
    name: "", // String
    address: {
      line1: "", //String
      line2: "", //String
      city: "", //String
      state: "", //String
      zip: "", //String
      country: "" //String
    },
    emailAddress: "", //String,
    phoneNumber: "" //String
  },
  order: [
    {
      productID: "",
      quantity: ""
    }
  ],
  notes: ""
};*/

const order1 = {
  _order_id: 600000,
  date_ordered: "2020_02_15_06_31_42",
  shipping_info: {
    name: "Bob Barker",
    address1: "2000 Big St",
    address2: "Apt A", city: "Bumbletown",
    state: "XY",
    zip: "11111"
  },
  email: "BB@priceisright.com",
  order: [
    {
      productID: "2",
      quantity: "1"
    }
  ],
  order_status: "shipped",
  notes: "Come on down"
};

const order2 = {
  _order_id: 600001,
  date_ordered: "2020_02_16_03_32_02",
  shipping_info: {
    name: "Vann Hellsing",
    address1: "666 Dead Vampire Wy",
    address2: "Apt 202", city: "Nightvale",
    state: "TR",
    zip: "50505"
  },
  email: "suckthis@silverandgarlic.com",
  order: [
    {
      productID: "1",
      quantity: "2"
    }
  ],
  order_status: "paid",
  notes: "Bats"
};

const order3 = {
  _order_id: 600002,
  date_ordered: "2020_02_18_03_02_51",
  shipping_info: {
    name: "Juice Springsteen",
    address1: "9001 Energy Rd",
    address2: "Unit H", city: "Menergy",
    state: "PT",
    zip: "12345"
  },
  email: "kickedintheface@mothernature.com",
  order: [
    {
      productID: "2",
      quantity: "1"
    },
    {
      productID: "3",
      quantity: "3"
    }
  ],
  order_status: "paid",
  notes: "It's like a fighter jet made out of biceps"
};

const inventory = [product1, product2, product3];

const orders = [order1, order2];

(module.exports = inventory), orders;
