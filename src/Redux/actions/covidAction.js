import {SAVE_COVID_DATA, TOGGLE_DATA_LOADING} from '../actionTypes'

export const saveCovidData = (payload) => {
    return {
      type: SAVE_COVID_DATA,
      payload,
    };
  };

  export const toggleCovidLoading = () => {
    return {
      type: TOGGLE_DATA_LOADING
    }
  }
