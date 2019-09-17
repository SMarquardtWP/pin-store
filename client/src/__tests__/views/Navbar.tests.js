import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Navbar from "../../views/Navbar";

configure({ adapter: new Adapter() });

describe("Navbar.js Component Tests", () => {
  test("component will mount", () => {
    shallow(<Navbar />);
  });
});
