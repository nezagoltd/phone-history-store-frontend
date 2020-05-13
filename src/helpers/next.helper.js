import obj from '../screens/welcome/WelcomeScreen';
import checkUserFromDb from './checkIfUserExistsFromDb.helper';

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
  if (phoneNumber) {
    const myUser = await checkUserFromDb(phoneNumber);
    if (myUser.error) {
      (await myDb).transaction((txn) => {
        txn.executeSql('INSERT INTO users (phoneNumber) VALUES (?)', [phoneNumber],
          (txt, result) => {
            if (result.rowsAffected > 0) {
              getUserData({ phoneNumber });
              navigation.navigate(nextComponent);
            } else {
              alert('We did not catch well your phone number, try again');
            }
          });
      });
    } else {
      alert(myUser.message);
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
