import React, { useContext } from "react";
import LocationContextProvider, {
  LocationContext,
  useMyContext,
} from "./LocationContext";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import SearchLocation from "../components/SearchLocation";
import FiveDayWeather from "../components/FiveDayWeather";
import { SET_LOCATION } from "../actions";

Enzyme.configure({ adapter: new Adapter() });

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

export const MyComponent = () => {
  const { myVal } = useMyContext(); // instead of useContext(MyContext)

  return <div data-test="my-component">{myVal}</div>;
};

it("renders the correct text", () => {
  jest.spyOn(LocationContext, "useMyContext").mockImplementation(() => ({
    myVal: "foobar",
  }));

  const wrapper = shallow(
    <LocationContext.Provider>
      <MyComponent />
    </LocationContext.Provider>
  ).dive();
  expect(wrapper.text()).toEqual("foobar");
});

// export const MockChildComponent = () => {
//   const { weatherState, dispatch } = useNewContext();
//   dispatch({ type: SET_LOCATION.REQ_LOCATION, params: "hanoi" });
//   const { params, status } = weatherState;
//   return (
//     <div data-testid="value">{status === "pending" ? params : "empty"}</div>
//   );
// };

// describe("test useReducer", () => {
//   it("should keep state value like as params was injected", () => {

//     const wrapper = shallow(
//       <LocationContextProvider>
//         <MockChildComponent />
//       </LocationContextProvider>
//     );

//     expect(
//       wrapper
//         .find(MockChildComponent)
//         .shallow()
//         .find('[data-testid="search-value"]')
//     ).toEqual("hanoi");
//   });
// });
