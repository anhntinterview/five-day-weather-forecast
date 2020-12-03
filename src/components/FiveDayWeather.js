import React, { useContext } from "react";
import { LocationContext } from "../contexts/LocationContext";

const FiveDayWeather = () => {
  const { location } = useContext(LocationContext);
  return (
    <>
      <h1>List of weather</h1>
    </>
  );
};

export default FiveDayWeather;
