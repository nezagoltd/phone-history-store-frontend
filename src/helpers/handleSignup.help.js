import axios from 'axios';
import obj from '../screens/welcome/WelcomeScreen';

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
    await myDb.transaction((txn) => {
      txn.executeSql('UPDATE users SET password=?, isRegistered=? WHERE phoneNumber=?',
        [data.password, true, data.phoneNumber]);
    });
  } catch (err) {
    res = err.response.data;
  }
  return res;
};

export default handleSignup;
