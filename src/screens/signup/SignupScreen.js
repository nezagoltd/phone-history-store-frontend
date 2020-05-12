import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../../styles/allStyles';
import getUserData from '../../actions/getUserData';

const { allStyles } = styles;
/**
 * @class
 */
class SignupScreen extends Component {
  /**
* @constructor
*/
  constructor() {
    super();
    this.state = {
    };
  }

  /**
* @method
* @return {*} UI
* @description it returns the UI
*/
  render() {
    const { getUserData: funcGetData } = this.props;
    return (
      <View style={allStyles.signupFormContainer}>
        <Text style={allStyles.signupTitle}>Enter your phone number</Text>
        <View style={allStyles.signupCodeAndPhoneContainer}>
          <TextInput
            placeholder="Enter your phone number"
            onChangeText={(text) => funcGetData({ phoneNumber: text })}
          />
        </View>
        <View>
          <TouchableOpacity
            style={allStyles.nextBtn}
            onPress={() => this.nextFunction()}
          >
            <Text style={allStyles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

SignupScreen.propTypes = {
  getUserData: PropTypes.func.isRequired,
};

/**
 *
 * @param {*} state
 * @returns {*} myData
 */
const mapStateToProps = (state) => ({
  myData: state.myReducers,
});

export default connect(mapStateToProps, { getUserData })(SignupScreen);
