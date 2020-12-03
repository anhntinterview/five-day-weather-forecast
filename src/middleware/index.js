import { SET_LOCATION, SET_CONSOLIDATED_WEATHER } from "../actions";
import { getAPI } from "../util/services";

const urlLocation = "https://metaweather.com/api/location/search/?query=";
const urlConsolidatedWeather = "https://metaweather.com/api/location/";

export default (dispatch) => (action) => {
  switch (action.type) {
    case SET_LOCATION.REQ_LOCATION:
    return getAPI(`https://5fc9146d2af77700165ae2a4.mockapi.io/api/name`)
      .then((res) =>
        dispatch({
          type: SET_LOCATION.REQ_LOCATION_SUCCESS,
          data: res,
        })
      )
      .catch((err) =>
        dispatch({
          type: SET_LOCATION.REQ_LOCATION_FAIL,
          err,
        })
      );
    case SET_CONSOLIDATED_WEATHER.REQ_CONSOLIDATED_WEATHER:
      return getAPI(`${urlConsolidatedWeather}${action.params}`)
        .then((res) =>
          dispatch({
            type: SET_LOCATION.REQ_LOCATION_SUCCESS,
            data: res,
          })
        )
        .catch((err) =>
          dispatch({
            type: SET_LOCATION.REQ_LOCATION_FAIL,
            err,
          })
        );
    default:
      dispatch(action);
  }
};
