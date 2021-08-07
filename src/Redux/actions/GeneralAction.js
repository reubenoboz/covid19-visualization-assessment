import {STATUS_FILTER, HANDLE_FILTER} from '../actionTypes'

export const handleFilter = (payload) => {
    return {
      type: HANDLE_FILTER,
      payload,
    };
  };

  export const handleStatusFilter = (payload) => {
    return {
      type: STATUS_FILTER,
      payload
    }
  }