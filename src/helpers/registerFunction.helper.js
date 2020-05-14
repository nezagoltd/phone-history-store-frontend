import handleSignup from './handleSignup.help';
import obj from '../screens/welcome/WelcomeScreen';

const { myDb } = obj;

/**
 *
 * @param {*} component
 * @return {*} registersUser
 */
const registerFunction = (component) => {
  const { password, confirmPassword } = component.state;
  const { myData, getUserData } = component.props;
  const { userData } = myData;
  const tmp = [];
  if (password && confirmPassword) {
    if (password === confirmPassword) {
      myDb.transaction((txn) => {
        txn.executeSql('SELECT * FROM users WHERE phoneNumber = ?', [userData.phoneNumber],
          (text, result) => {
            for (let i = 0; i < result.rows.length; i += 1) {
              tmp.push(result.rows.item(i));
            }
            tmp.forEach(async (currReg) => {
              if (currReg.phoneNumber
                && currReg.firstName && currReg.lastName && currReg.email && currReg.age) {
                const data = {
                  phoneNumber: currReg.phoneNumber,
                  firstName: currReg.firstName,
                  lastName: currReg.lastName,
                  email: currReg.email,
                  age: currReg.age,
                  password,
                };
                const user = await handleSignup(data);
                if (user.token) {
                  // signup success
                  alert(user.token);
                  getUserData({ token: user.token });
                } else {
                  // signup failed
                  alert(user.error);
                }
              } else {
                alert('You cannot register without filling all required fields');
              }
            });
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
