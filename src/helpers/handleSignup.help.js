import axios from 'axios';
import obj from '../database/connectToDb';

const { myDb } = obj;

/**
 *
 * @param {*} data
 * @return {*} message
 */
const handleSignup = async (data) => {
  const SIGNUP_URL = 'https://phone-history-store-backend.herokuapp.com/api/users/signup';
  let res;
  try {
    const tmp = await axios.post(SIGNUP_URL, data);
    res = tmp.data;
    const { token } = tmp.data;
    await myDb.transaction((txn) => {
      txn.executeSql('UPDATE users SET password=?, isRegistered=?, token=? WHERE phoneNumber=?',
        [data.password, true, data.phoneNumber, token]);
    });
  } catch (err) {
    res = err.response.data;
  }
  return res;
};

export default handleSignup;
