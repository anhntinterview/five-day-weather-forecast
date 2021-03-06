import React, { useState, useContext, useEffect } from "react";
import LocationContext from "../../contexts/LocationContext";
import axios from "axios";
import middleware from "../../middleware";
import PropTypes from "prop-types";

const SearchLocation = () => {
  const [query, setQuery] = useState("");
  const { dispatch } = useContext(LocationContext);

  useEffect(() => {
    if (query !== "") {
      const { cancel, token } = axios.CancelToken.source();
      const timeoutId = setTimeout(
        () => middleware(query, dispatch, token),
        300
      );
      return () => cancel("No longer latest query") || clearTimeout(timeoutId);
    }
  }, [dispatch, query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <h1>Five days weather forecast</h1>
      <input
        type="text"
        placehodler="typing your city"
        onChange={handleChange}
        value={query}
        data-test="input"
      />
    </div>
  );
};

export default SearchLocation;

SearchLocation.prototype = {
  query: PropTypes.string,
  handleChange: PropTypes.func,
};
