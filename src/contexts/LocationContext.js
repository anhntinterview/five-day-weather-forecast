import React, { createContext, useReducer } from "react";
import reducers from "../reducers";

export const LocationContext = createContext();

const LocationContextProvider = (props) => {
  const [weatherState, dispatch] = useReducer(reducers, {
    isLoaded: null,
    result: [],
    params: "",
    status: null,
    err: null,
  });

  return (
    <LocationContext.Provider value={{ weatherState, dispatch }}>
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
