import * as types from './actionTypes';
import api from '../../../api';

export function getData() {
  // body...
  return async (dispatch, getState) => {
    dispatch({
      type: types.LOADING,
    });
    try {
      const users = await api.getUsers();
      console.log(users)
      dispatch({
        type: types.LOADED,
        users,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
