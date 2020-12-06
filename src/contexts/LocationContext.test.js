import React, { useContext } from "react";
import LocationContextProvider, { LocationContext } from "./LocationContext";
import { shallow } from "enzyme";

import SearchLocation from "../components/SearchLocation";
import FiveDayWeather from "../components/FiveDayWeather";
import { SET_LOCATION } from "../actions";

const setup = () => {
  const component = shallow(<LocationContextProvider />);
  return component;
};

describe("Location Context Component", () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it("SearchLocation child should be rendered without crashing", () => {
    const wrapper = shallow(
      <LocationContextProvider>
        <SearchLocation />
      </LocationContextProvider>
    );
    expect(wrapper.length).toBe(1);
  });
  it("FiveDayWeather child should be rendered without crashing", () => {
    const wrapper = shallow(
      <LocationContextProvider>
        <FiveDayWeather />
      </LocationContextProvider>
    );
    expect(wrapper.length).toBe(1);
  });
  it("SearchLocation & FiveDayWeather child should be rendered without crashing", () => {
    const wrapper = shallow(
      <LocationContextProvider>
        <SearchLocation />
        <FiveDayWeather />
      </LocationContextProvider>
    );
    expect(wrapper.length).toBe(1);
  });
});

describe("test useReducer", () => {
  it("state was loaded success", () => {
    const MockChildComponent = () => {
      const { weatherState, dispatch } = useContext(LocationContext);
      dispatch({ type: SET_LOCATION.REQ_LOCATION, params: "hanoi" });
      const { params, status } = weatherState;
      return (
        <div data-testid="value">{status === "pending" ? params : "empty"}</div>
      );
    };
    const wrapper = shallow(
      <LocationContextProvider>
        <MockChildComponent />
      </LocationContextProvider>
    );

    expect(
      wrapper.find(MockChildComponent).shallow().find('[data-testid="value"]')
    ).toEqual("hanoi");
  });
});
