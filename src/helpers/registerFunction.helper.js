// import axios from 'axios';
import obj from '../screens/welcome/WelcomeScreen';

const { myDb } = obj;

/**
 *
 * @param {*} component
 * @return {*} registersUser
 */
const registerFunction = (component) => {
  const { password, confirmPassword } = component.state;
  const { userData } = component.props.myData;
  if (password && confirmPassword) {
    if (password === confirmPassword) {
      myDb.transaction((txn) => {
        txn.executeSql('SELECT * FROM users WHERE phoneNumber = ?', [userData.phoneNumber],
          (text, result) => {
            const tmp = [];
            for (let i = 0; i < result.rows.length; i += 1) {
              tmp.push(result.rows.item(i));
            }
          });
      });
    } else {
      alert('Your passwords mismatched');
    }
  } else {
    alert('You must choose password to use for your privacy purpose');
  }
};

export default registerFunction;
