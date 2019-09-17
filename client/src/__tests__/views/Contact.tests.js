import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Contact from "../../views/Contact";

configure({ adapter: new Adapter() });

describe("Contact.js Component Tests", () => {
  test("component will mount", () => {
    shallow(<Contact />);
  });
});
