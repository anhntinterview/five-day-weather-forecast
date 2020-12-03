import React, { createContext, useReducer } from "react";
import reducers from "../reducers";
import middleware from "../middleware";

export const LocationContext = createContext();

const LocationContextProvider = (props) => {
  const [location, dispatch] = useReducer(reducers, {
    isLoaded: null,
    data: [],
    params: "",
    status: null,
    err: "",
  });

  const eDispatch = middleware(dispatch);
  console.log(`location: `, location);

  return (
    <LocationContext.Provider value={{ location, eDispatch }}>
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
