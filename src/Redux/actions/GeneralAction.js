import {STATUS_FILTER, HANDLE_FILTER} from '../actionTypes'

//handle filter
export const handleFilter = (payload) => {
    return {
      type: HANDLE_FILTER,
      payload,
    };
  };

  //handle status filter
  export const handleStatusFilter = (payload) => {
    return {
      type: STATUS_FILTER,
      payload
    }
  }