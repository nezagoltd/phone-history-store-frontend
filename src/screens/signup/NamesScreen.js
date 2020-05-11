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
class EnterNamesScreen extends Component {
  nextFunction=nextFunction;

  /**
* @constructor
*/
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
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
        <Text style={allStyles.signupTitle}>Enter your names </Text>
        <View style={allStyles.signupCodeAndPhoneContainer}>
          <TextInput
            style={allStyles.signupInput}
            placeholder="Enter your first name"
            placeholderTextColor="rgb(255,255,255)"
            onTextChange={(text) => this.setState({ firstName: text })}
            keyboardType="default"
            autoFocus
          />
          <TextInput
            style={allStyles.signupInput}
            placeholder="Enter your last name"
            placeholderTextColor="rgb(255,255,255)"
            onTextChange={(text) => this.setState({ lastName: text })}
            keyboardType="default"
          />
        </View>
        <View>
          <TouchableOpacity
            style={allStyles.nextBtn}
            onPress={() => this.nextFunction(this, 'EnterEmailAndAgeScreen')}
          >
            <Text style={allStyles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

EnterNamesScreen.propTypes = {
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

export default connect(mapStateToProps, { getUserData })(EnterNamesScreen);
