import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "../../views/Footer";

configure({ adapter: new Adapter() });

describe("Footer.js Component Tests", () => {
  test("component will mount", () => {
    shallow(<Footer />);
  });
});
