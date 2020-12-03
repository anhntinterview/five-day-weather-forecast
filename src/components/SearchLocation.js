import React, { useState, useContext, useEffect } from "react";
import { LocationContext } from "../contexts/LocationContext";
import { SET_LOCATION } from "../actions";

const SearchLocation = () => {
  const [query, setQuery] = useState("");
  const { eDispatch } = useContext(LocationContext);

  useEffect(() => {
    if(query !== "") {
      eDispatch({type: SET_LOCATION.REQ_LOCATION, params: query})
    }
  }, [query])

  return (
    <>
    <h1>Hello</h1>
      <input
        type="text"
        placehodler="typing your city"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </>
  );
};

export default SearchLocation;
