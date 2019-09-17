import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "../../views/Main";

configure({ adapter: new Adapter() });

describe("Main.js Component Tests", () => {
  test("component will mount", () => {
    shallow(<Main />);
  });
});
