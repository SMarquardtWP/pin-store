const Photo = require("../temporary_pin_image.png");

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

const order1 = {
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
};

const order2 = {
  orderID: "",
  orderDate: "",
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
};

const inventory = [product1, product2, product3];

const orders = [order1, order2];

(module.exports = inventory), orders;
