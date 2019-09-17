import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Checkout from "../../views/Checkout";

configure({ adapter: new Adapter() });

describe("Checkout.js Component Tests", () => {
  test("component will mount", () => {
    shallow(<Checkout />);
  });
});
