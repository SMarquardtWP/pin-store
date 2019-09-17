import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Cart from "../../views/Cart";

configure({ adapter: new Adapter() });

describe("Cart.js Component Tests", () => {
  test("component will mount", () => {
    shallow(<Cart />);
  });
});
