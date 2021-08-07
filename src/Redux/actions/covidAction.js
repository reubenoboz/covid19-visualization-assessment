import { SAVE_COVID_DATA, TOGGLE_DATA_LOADING } from "../actionTypes";

// Save covid data
export const saveCovidData = (payload) => {
  return {
    type: SAVE_COVID_DATA,
    payload,
  };
};

//toggle loader
export const toggleCovidLoading = () => {
  return {
    type: TOGGLE_DATA_LOADING,
  };
};
