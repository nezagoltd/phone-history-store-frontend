import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../../styles/allStyles';
import getUserData from '../../actions/getUserData';
import nextFunction from '../../helpers/next.helper';

const { allStyles } = styles;

/**
 * @class
 */
class EnterEmailAndAgeScreen extends Component {
  nextFunction=nextFunction;

  /**
* @constructor
*/
  constructor() {
    super();
    this.state = {
      email: '',
      age: '',
    };
    this.nextFunction = this.nextFunction.bind(this);
  }

  /**
* @method
* @return {*} UI
* @description it returns the UI
*/
  render() {
    return (
      <View style={allStyles.signupFormContainer}>
        <Text style={allStyles.signupTitle}>Enter your email and your age </Text>
        <View style={allStyles.signupCodeAndPhoneContainer}>
          <TextInput
            style={allStyles.signupInput}
            placeholder="Enter your email"
            placeholderTextColor="rgb(255,255,255)"
            onChangeText={(text) => this.setState({ email: text })}
            keyboardType="default"
            autoFocus
          />
          <TextInput
            style={allStyles.signupInput}
            placeholder="Enter age in numbers (eg: 22)"
            placeholderTextColor="rgb(255,255,255)"
            onChangeText={(text) => this.setState({ age: text })}
            keyboardType="default"
          />
        </View>
        <View>
          <TouchableOpacity
            style={allStyles.nextBtn}
            onPress={() => this.nextFunction(this, 'DeviceInfoScreen')}
          >
            <Text style={allStyles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

EnterEmailAndAgeScreen.propTypes = {
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

export default connect(mapStateToProps, { getUserData })(EnterEmailAndAgeScreen);
