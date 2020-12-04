import { SET_LOCATION } from "../actions";
import axios from "axios";

// export default (dispatch) => (action) => {
//   switch (action.type) {
//     case SET_LOCATION.REQ_LOCATION:
//       return fetch(
//         `https://api.weatherapi.com/v1/forecast.json?key=23f50d44aa414630a91180932200312&q=${action.params}&days=5`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           dispatch({
//             type: SET_LOCATION.REQ_LOCATION_SUCCESS,
//             data,
//           });
//         })
//         .catch((err) =>
//           dispatch({
//             type: SET_LOCATION.REQ_LOCATION_FAIL,
//             err,
//           })
//         );
//     default:
//       dispatch(action);
//   }
// };

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