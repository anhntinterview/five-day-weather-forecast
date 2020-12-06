import { render, fireEvent } from "@testing-library/react";
import { shallow } from "enzyme";
import SearchLocation from "../SearchLocation";

const setup = (component, value) => {
  const wrapper = shallow(component);
  return wrapper.find(value);
};

test("should keep value in front of input", () => {
  const input = setup(<SearchLocation />, '[data-testid="input-value"]');
  fireEvent.change(input, { target: { value: "hanoi" } });
  expect(input.value).toBe("hanoi");
});
