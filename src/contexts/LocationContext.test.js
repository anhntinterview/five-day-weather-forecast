import React, { useContext } from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import LocationContext, { useLocationContext } from "./LocationContext";
import * as LocationContextModule from "./LocationContext";
import LocationContextProvider from "./LocationProvider";

import SearchLocation from "../components/SearchLocation";
import FiveDayWeather from "../components/FiveDayWeather";

import { checkProps } from "../utils";

Enzyme.configure({ adapter: new Adapter() });

describe("load Location Context Child Component", () => {
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

describe("Checking Context", () => {
  const MyComponent = () => {
    const { myVal } = useLocationContext(); // instead of useContext(LocationContext)

    return <div data-test="my-component">{myVal}</div>;
  };
  it("render correct text LocationContext", () => {
    jest
      .spyOn(LocationContextModule, "useLocationContext")
      .mockImplementation(() => ({
        myVal: "foobar",
      }));

    const wrapper = shallow(
      <LocationContext.Provider>
        <MyComponent />
      </LocationContext.Provider>
    ).dive();
    expect(wrapper.text()).toEqual("foobar");
  });
});

describe("Checking PropTypes", () => {
  it("weatherState: Should NOT throw a warning", () => {
    const expectedProps = {
      weatherState: {
        isLoaded: null,
        result: [],
        params: "",
        status: null,
        err: null,
      },
    };
    const propsError = checkProps(LocationContextProvider, expectedProps);
    expect(propsError).toBeUndefined();
  });
});