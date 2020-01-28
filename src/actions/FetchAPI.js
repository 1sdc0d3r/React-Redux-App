import axios from "axios";

export const FETCH_API_START = "FETCH_API_START";
export const FETCH_API_SUCCESS = "FETCH_API_SUCCESS";
export const FETCH_API_FAIL = "FETCH_API_FAIL";

export const FetchApi = url => dispatch => {
  dispatch({ type: FETCH_API_START, payload: url });
  axios
    .get(url)
    .then(res =>
      dispatch({ type: FETCH_API_SUCCESS, payload: res.data.message })
    )
    .catch(err => dispatch({ type: FETCH_API_FAIL, payload: err }));
};
