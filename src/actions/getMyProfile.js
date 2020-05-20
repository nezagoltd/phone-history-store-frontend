import axios from 'axios';
import { GET_MY_PROFILE, GET_ERRORS } from './types';
/**
 *
 * @param {*} token
 * @returns {*} redux
 */
const getMyProfile = (token) => async (dispatch) => {
  const tmp = await axios.get('https://phone-history-store-backend.herokuapp.com/api/users/profile', { headers: { Authorization: `Bearer ${token}` } });

  if (tmp.status === 200) {
    dispatch({
      type: GET_MY_PROFILE,
      payload: tmp.data,
    });
  } else {
    dispatch({
      type: GET_ERRORS,
      payload: tmp.response.data,
    });
  }
};

export default getMyProfile;
