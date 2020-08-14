import { openDatabase } from 'react-native-sqlite-storage';

const myDb = openDatabase({ name: 'nezadigitalstore.db', createFromLocation: 1 });

/**
 * @returns {*} db
 * @description it prepares the db
 */
const prepareDb = () => {
  myDb.transaction((txn) => {
    txn.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='users'", [],
      (tx, res) => {
        if (res.rows.length === 0) {
          txn.executeSql('DROP TABLE IF EXISTS users', []);
          txn.executeSql('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, phoneNumber VARCHAR(20), firstName VARCHAR(255), lastName VARCHAR(255), email VARCHAR(255), "password" VARCHAR(255), age INTEGER, isRegistered BOOLEAN DEFAULT false, deviceUniqueId VARCHAR(255), deviceName VARCHAR(255),token VARCHAR(255));', []);
        }
      },
    );
  });
};

export default { prepareDb, myDb };
