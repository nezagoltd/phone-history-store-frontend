import axios from 'axios';
import obj from '../database/connectToDb';
import checkNetworkConnectivity from '../helpers/checkInternetConnection.helper';

/**
 * @param {*} component
 * @returns {*} Login
 */
const handleLogin = async (component) => {
  const LOGIN_URL = 'http://phone-history-store-backend.herokuapp.com/api/users/login';
  const { navigation } = component.props;
  const { phoneNumber, password } = component.state;
  const { myDb } = obj;
  const phoneNumberToSend = `"${phoneNumber}"`;
  let resFromDb;
  if (phoneNumber && password) {
    if (checkNetworkConnectivity(component)[2]) {
      try {
        const tmp = await axios.post(LOGIN_URL, { phoneNumber: phoneNumberToSend, password });
        resFromDb = tmp.data;
      } catch (err) {
        resFromDb = err.response.data;
      }
      if (!resFromDb.error) {
        // login success
        const { token } = resFromDb;
        await myDb.transaction((txn) => {
          txn.executeSql('UPDATE users set token = ? WHERE phoneNumber = ?',
            [token, phoneNumberToSend]);
        });
        navigation.navigate('DashboardScreen');
      } else {
        // login failed
        alert(resFromDb.error);
      }
    } else {
      alert('You are not connected to the Internet, try again after you get connected');
    }
  } else {
    alert('Enter both your phone number and your password');
  }
};
export default handleLogin;
