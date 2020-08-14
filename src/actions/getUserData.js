import { USER_DATA_SIGNUP } from './types';
/**
 *
 * @param {*} data
 * @returns {*} state
 */
const getUserData = (data) => (dispatch) => {
  dispatch({
    type: USER_DATA_SIGNUP,
    payload: data,
  });
};

export default getUserData;
