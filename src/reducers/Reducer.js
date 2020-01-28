import { FETCH_API_START } from "../actions/FetchAPI";
import { FETCH_API_SUCCESS } from "../actions/FetchAPI";
import { FETCH_API_FAIL } from "../actions/FetchAPI";

const initState = {
  imgUrl: "",
  error: "",
  isFetching: false
};

export const Reducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_API_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_API_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        imgUrl: action.payload
      };
    case FETCH_API_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
