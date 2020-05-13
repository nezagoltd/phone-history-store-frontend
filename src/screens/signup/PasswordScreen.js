import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../../styles/allStyles';
import getUserData from '../../actions/getUserData';
import registerFunction from '../../helpers/registerFunction.helper';

const { allStyles } = styles;

/**
 * @class
 */
class EnterPasswordScreen extends Component {
  registerFunction=registerFunction;

  /**
* @constructor
*/
  constructor() {
    super();
    this.state = {
      password: '',
      confirmPassword: '',
    };
    this.registerFunction = this.registerFunction.bind(this);
  }

  /**
* @method
* @return {*} UI
* @description it returns the UI
*/
  render() {
    return (
      <View style={allStyles.signupFormContainer}>
        <Text style={allStyles.signupTitle}>Choose a password to use </Text>
        <View style={allStyles.signupCodeAndPhoneContainer}>
          <TextInput
            style={allStyles.signupInput}
            placeholder="Enter your password"
            placeholderTextColor="rgb(255,255,255)"
            onChangeText={(text) => this.setState({ password: text })}
            keyboardType="default"
            autoFocus
          />
          <TextInput
            style={allStyles.signupInput}
            placeholder="confirm your password"
            placeholderTextColor="rgb(255,255,255)"
            onChangeText={(text) => this.setState({ confirmPassword: text })}
            keyboardType="default"
          />
        </View>
        <View>
          <TouchableOpacity
            style={allStyles.nextBtn}
            onPress={() => { this.registerFunction(this); }}
          >
            <Text style={allStyles.nextText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

EnterPasswordScreen.propTypes = {
  myData: PropTypes.object.isRequired,
  getUserData: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, { getUserData })(EnterPasswordScreen);
