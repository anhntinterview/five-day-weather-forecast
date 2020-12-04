import React, { createContext, useReducer } from "react";
import reducers from "../reducers";
// 0.
// --- Using FETCH()
// import middleware from "../middleware";
import _ from "lodash";

export const LocationContext = createContext();

const LocationContextProvider = (props) => {
  const [weatherState, dispatch] = useReducer(reducers, {
    isLoaded: null,
    result: [],
    params: "",
    status: null,
    err: "",
  });
  
  // 0.
  // --- Using FETCH()
  // const eDispatch = middleware(dispatch);

  return (
    <LocationContext.Provider value={{ weatherState, dispatch }}> {/* --- Using AXIOS */}
    {/* <LocationContext.Provider value={{ location, eDispatch }}> --- Using FETCH */}
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
