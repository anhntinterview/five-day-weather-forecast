import React from "react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SearchLocation from "./index";
import { checkProps } from "../../utils";

Enzyme.configure({ adapter: new Adapter() });

describe("SearchLocation Component", () => {
  it("render correct input value", () => {
    // const onChangeSpy = jest.fn()
    const wrapper = shallow(<SearchLocation />);
    wrapper
      .find("input")
      .simulate("change", { target: { value: "hanoi" } })
      .simulate("change", { target: { value: "ho chi minh" } });
    // expect(onChangeSpy.mock.calls.length).toBe(2)
    expect(wrapper.find("input").props().value).toEqual("ho chi minh");
  });
  describe("Checking PropTypes", () => {
    it("query - keyword search: Should NOT throw a warning", () => {
      const expectedProps = {
        query: "hanoi",
      };
      const propsError = checkProps(SearchLocation, expectedProps);
      expect(propsError).toBeUndefined();
    });
    it("handleChange - handle change input value: Should NOT throw a warning", () => {
      const expectedProps = {
        handleChange: () => {}
      };
      const propsError = checkProps(SearchLocation, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
});
