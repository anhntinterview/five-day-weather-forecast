import {
  SET_LOCATION,
  SET_CONSOLIDATED_WEATHER,
} from "../actions";

export default (state, action) => {
  switch (action.type) {
    case SET_LOCATION.REQ_LOCATION:
      return {
        ...state,
        isLoaded: false,
        params: action.params,
        status: "pending",
      };
    case SET_LOCATION.REQ_LOCATION_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        data: action.data,
        status: "done",
      };
    case SET_LOCATION.REQ_LOCATION_FAIL:
      return {
        ...state,
        isLoaded: false,
        err: action.err,
        status: "fail",
      };
    case SET_CONSOLIDATED_WEATHER.REQ_CONSOLIDATED_WEATHER:
      return {
        ...state,
        isLoaded: false,
        params: action.params,
        status: "pending",
      };
    case SET_CONSOLIDATED_WEATHER.REQ_CONSOLIDATED_WEATHER_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        data: action.data,
        status: "done",
      };
    case SET_CONSOLIDATED_WEATHER.REQ_CONSOLIDATED_WEATHER_FAIL:
      return {
        ...state,
        isLoaded: false,
        data: action.data,
        status: action.error,
      };
    default:
      return state;
  }
};
