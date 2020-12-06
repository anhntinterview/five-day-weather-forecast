import React, { useContext } from "react";

const LocationContext = React.createContext({});
export default LocationContext
export const useLocationContext = () => useContext(LocationContext);

