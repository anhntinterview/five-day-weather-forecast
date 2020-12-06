import { SET_LOCATION } from "../actions";

export default function reducer(state, action) {
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
        isLoaded: true,
        result: action.result,
        status: "done",
        err: "none",
      };
    case SET_LOCATION.REQ_LOCATION_FAIL:
      return {
        ...state,
        isLoaded: false,
        err: action.err,
        status: "fail",
      };
    default:
      return state;
  }
}
