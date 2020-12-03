import { SET_LOCATION, SET_CONSOLIDATED_WEATHER } from "../actions";

export const locationAction = (state, dispatch) => ({
  data: (params) => {
    dispatch({ type: SET_LOCATION.REQ_LOCATION, payload: params });
  },
});

export const consolidatedWeatherAction = (state, dispatch) => ({
  data: (params) => {
    dispatch({
      type: SET_CONSOLIDATED_WEATHER.REQ_CONSOLIDATED_WEATHER,
      payload: params,
    });
  },
});
