import axios from 'axios';

/**
 *
 * @param {*} phoneNumber
 * @returns {*} user
 */
const checkUserFromDb = async (phoneNumber) => {
  let res;
  try {
    const user = await axios.get(`https://phone-history-store-backend.herokuapp.com/api/users/check-user/${phoneNumber}`);
    res = user.data;
  } catch (err) {
    res = err.response.data;
  }

  return res;
};

export default checkUserFromDb;
