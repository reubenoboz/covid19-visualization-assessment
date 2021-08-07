import { STATUS_FILTER, HANDLE_FILTER } from "../actionTypes";

const initialState = {
  filterTerm: "",
  status: "confirmedCases",
};

const GeneralReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_FILTER:
      return {
        ...state,
        filterTerm: action.payload,
      };
    case STATUS_FILTER:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default GeneralReducer;
