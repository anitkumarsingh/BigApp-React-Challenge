import * as types from './actionTypes';
import api from '../../../api';

export function getData() {
  // body...
  return async (dispatch, getState) => {
    dispatch({
      type: types.LOADING,
    });
    try {
      const cities = await api.getUsers();
      console.log(cities)
      dispatch({
        type: types.LOADED,
        cities,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
