import {
  SAVE_COVID_DATA,
  TOGGLE_DATA_LOADING,
} from "../actionTypes";

const initialState = {
  covidData: {},
  isLoadingData: false
};

const CovidReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_COVID_DATA:
      let data = action.payload;
      return {
        ...state,
        covidData: data
      };
    case TOGGLE_DATA_LOADING:
      return {
        ...state,
        isLoadingData: !state.isLoadingData,
      };
    default:
      return state;
  }
};

export default CovidReducer;
