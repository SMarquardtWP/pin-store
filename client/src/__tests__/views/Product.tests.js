import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Product from "../../views/Product";

configure({ adapter: new Adapter() });

describe("Product.js Component Tests", () => {
  test("component will mount", () => {
    shallow(<Product />);
  });
});
