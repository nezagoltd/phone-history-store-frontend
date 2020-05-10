import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../../styles/allStyles';
import InputComponent from '../../components/InputComponent';

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
   * @return {*} next state
   */
  nextFunction = () => {
    // console.log(this.state);
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
          <InputComponent numberOfInputs={2} />
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

export default SignupScreen;
