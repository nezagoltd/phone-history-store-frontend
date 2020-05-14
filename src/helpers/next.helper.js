import obj from '../screens/welcome/WelcomeScreen';
import checkUserFromDb from './checkIfUserExistsFromDb.helper';
import checkNetworkConnectivity from './checkInternetConnection.helper';

const { myDb } = obj;

/**
 *@param {*} component
 *@param {*} nextComponent
 *@returns {*} state
 */
const nextFunction = async (component, nextComponent) => {
  const { phoneNumber, firstName, lastName, email, age } = component.state;
  const { navigation, getUserData, myData } = component.props;
  const { userData } = myData;
  const phoneNumberToDeal = `"${phoneNumber}"`;
  const myNetworkInfo = checkNetworkConnectivity(component);
  if (phoneNumber) {
    if (myNetworkInfo[2]) {
      const myUser = await checkUserFromDb(phoneNumberToDeal);
      if (myUser.error) {
        (await myDb).transaction((txn) => {
          txn.executeSql('INSERT INTO users (phoneNumber) VALUES (?)', [phoneNumberToDeal],
            (txt, result) => {
              if (result.rowsAffected > 0) {
                getUserData({ phoneNumber: phoneNumberToDeal });
                navigation.navigate(nextComponent);
              } else {
                alert('We did not catch well your phone number, try again');
              }
            });
        });
      } else {
        await myDb.transaction((txn) => {
          txn.executeSql('SELECT * FROM users WHERE phoneNumber = ?', [phoneNumberToDeal], (txt, result) => {
            if (result.rows.length > 0) {
              alert('Go to Login');
            } else {
              alert('This account exists, not on this phone but on the other phone, so login instead');
            }
          });
        });
      // alert(myUser.message);
      }
    } else {
      alert('You are not connected to internet');
    }
  } else if (firstName || lastName) {
    const phoneNumberToReferenceForUpdate = userData.phoneNumber;
    if (firstName.length !== 0 && lastName.length !== 0) {
      myDb.transaction((txn) => {
        txn.executeSql('UPDATE users SET firstName=?, lastName=? WHERE phoneNumber=?',
          [firstName, lastName, phoneNumberToReferenceForUpdate],
          (txt, result) => {
            if (result.rowsAffected > 0) {
              navigation.navigate(nextComponent);
            } else {
              alert('We are having trouble catching your first and last name, please try again');
            }
          });
      });
    } else {
      alert('Enter both first and last name');
    }
  } else if (email || age) {
    if (email && age) {
      if (!isNaN(age)) {
        if (age > 4 && age < 100) {
          (await myDb).transaction((txn) => {
            txn.executeSql('Update users SET email = ?, age = ? WHERE phoneNumber = ?',
              [email, age, userData.phoneNumber],
              (txt, result) => {
                if (result.rowsAffected > 0) {
                  navigation.navigate(nextComponent);
                } else {
                  alert('We are having troubles to catch your email and age, please try again');
                }
              });
          });
        } else {
          alert('Your age is invalid, you must enter age which is not less than 4 and not greater than 100');
        }
      } else {
        alert('You should enter a valid age, which is a number looking like 22');
      }
    } else {
      alert('Please enter both your email and your age');
    }
  }
};

export default nextFunction;
