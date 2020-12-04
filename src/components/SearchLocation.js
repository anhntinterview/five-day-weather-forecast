import React, {
  useState,
  useContext,
  useEffect,
  // useRef
} from "react";
import { LocationContext } from "../contexts/LocationContext";
// 0. --- Using FETCH()
// import { SET_LOCATION } from "../actions";
import _ from "lodash";
import axios from "axios";
// 0. --- Using AXIOS
import middleware from "../middleware";

const SearchLocation = () => {
  const [query, setQuery] = useState("");
  // 1.
  // --- Using AXIOS
  const { dispatch } = useContext(LocationContext);
  // --- Using FETCH()
  // const { eDispatch } = useContext(LocationContext);

  // 2.
  // --- Using AXIOS
  // --- Using FETCH()
  // const debouceFetch = useRef(
  //   _.debounce(
  //     (query) => eDispatch({ type: SET_LOCATION.REQ_LOCATION, params: query }),
  //     500
  //   )
  // ).current;

  // 3.
  // --- Using AXIOS
  // --- Using AXIOS + LODASH
  // useEffect(() => {
  //   const { cancel, token } = axios.CancelToken.source()
  //   // 2.
  //   // --- Using AXIOS
  //   const debouncedFetchHits = _.debounce(
  //     () => fetchHits(query, dispatch, token),
  //     500
  //   )
  //   debouncedFetchHits()
  //   return () => cancel("No longer latest query") || debouncedFetchHits.cancel()
  // }, [query])
  // --- Using AXIOS + setTimeout()
  useEffect(() => {
    if (query !== "") {
      const { cancel, token } = axios.CancelToken.source();
      const timeoutId = setTimeout(
        () => middleware(query, dispatch, token),
        300
      );
      return () => cancel("No longer latest query") || clearTimeout(timeoutId);
    }
  }, [query]);
  // --- Using FETCH()
  // useEffect(() => {
  //   debouceFetch(query);
  // }, [debouceFetch, query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  console.log(`query: `, query);

  return (
    <>
      <h1>Five days weather forecast</h1>
      <input
        type="text"
        placehodler="typing your city"
        onChange={handleChange}
        value={query}
      />
    </>
  );
};

export default SearchLocation;
