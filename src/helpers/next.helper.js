import SQLite from 'react-native-sqlite-storage';

/**
 *@param {*} component
 *@param {*} nextComponent
 *@returns {*} state
 */
const nextFunction = async (component, nextComponent) => {
  const { phoneNumber, firstName, lastName, email, age } = component.state;
  const { getUserData: funcGetData, navigation } = component.props;
  const myDb = await SQLite.openDatabase({ name: 'nezastore_db', createFromLocation: 1 }, () => {}, () => {});
  await myDb.transaction((db) => {
    db.executeSql(`CREATE TABLE users IF NOT EXISTS (
      id INTEGER PRIMARY KEY AUTO_INCREMENT
      phoneNumber STRING
      firstName STRING
      lastName STRING,
      email STRING,
      age INTEGER,
      password STRING
      )`);
  });
  if (phoneNumber) {
    funcGetData({ phoneNumber });
    await myDb.transaction((db) => { db.executeSql(); });
  } else if (firstName || lastName) {
    funcGetData({ firstName, lastName });
    await myDb.transaction((db) => { db.executeSql(); });
  } else if (email || age) {
    funcGetData({ email, age });
  }

  navigation.navigate(nextComponent);
};

export default nextFunction;
