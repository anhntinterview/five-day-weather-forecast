import React, { useReducer } from "react";
import LocationContext from "./LocationContext";
import reducers from "../reducers";
import PropTypes from "prop-types";

export default function LocationContextProvider(props) {
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
}

LocationContextProvider.prototype = {
  weatherState: PropTypes.object
}



