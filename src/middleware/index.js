import { SET_LOCATION } from "../actions";
import axios from "axios";

export default async function (query, dispatch, cancelToken) {
  dispatch({ type: SET_LOCATION.REQ_LOCATION })
  try {
    const result = await axios(
      `https://api.weatherapi.com/v1/forecast.json?key=23f50d44aa414630a91180932200312&q=${query}&days=5`,
      {
        cancelToken,
      }
    )
    dispatch({ type: SET_LOCATION.REQ_LOCATION_SUCCESS, result })
  } catch (err) {
    console.error(err)
    axios.isCancel(err) || dispatch({ type: SET_LOCATION.REQ_LOCATION_FAIL, err: err.toJSON().message })
  }
}