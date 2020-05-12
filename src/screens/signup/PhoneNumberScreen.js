import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { openDatabase } from 'react-native-sqlite-storage';
import styles from '../../styles/allStyles';
import getUserData from '../../actions/getUserData';
import nextFunction from '../../helpers/next.helper';

const { allStyles } = styles;

/**
 * @class
 */
class PhoneNumberScreen extends Component {
  nextFunction=nextFunction;

  /**
* @constructor
*/
  constructor() {
    super();
    this.state = {
      phoneNumber: '',
    };
    this.nextFunction = this.nextFunction.bind(this);
  }

  componentDidMount = () => {
    const myDb = openDatabase({ name: 'nezastore_db.db' });
    myDb.transaction((myQuery) => {
      myQuery.executeSql('CREATE TABLE users (id INTEGER PRIMARY KEY, phoneNumber STRING)');
      myQuery.executeSql('SELECT * FROM users', (text, result) => {
        console.log(result.rows.length);
      });
    });
  }

  /**
* @method
* @return {*} UI
* @description it returns the UI
*/
  render() {
    return (
      <View style={allStyles.signupFormContainer}>
        <Text style={allStyles.signupTitle}>Enter your phone number</Text>
        <View style={allStyles.signupCodeAndPhoneContainer}>
          <TextInput
            style={allStyles.signupInput}
            placeholder="Enter your phone number"
            placeholderTextColor="rgb(255,255,255)"
            onChangeText={(text) => this.setState({ phoneNumber: text })}
            keyboardType="phone-pad"
            autoFocus
          />
        </View>
        <View>
          <TouchableOpacity
            style={allStyles.nextBtn}
            onPress={() => this.nextFunction(this, 'EnterNamesScreen')}
          >
            <Text style={allStyles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

PhoneNumberScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

/**
 *
 * @param {*} state
 * @returns {*} myData
 */
const mapStateToProps = (state) => ({
  myData: state.myReducers,
});

export default connect(mapStateToProps, { getUserData })(PhoneNumberScreen);
