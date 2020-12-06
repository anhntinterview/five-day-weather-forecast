import React, { createContext, useContext, useReducer } from "react";
import reducers from "../reducers";

export const LocationContext = createContext();
// for test
export const useMyContext = () => useContext(LocationContext);

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
