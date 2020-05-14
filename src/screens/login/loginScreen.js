import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

/**
 * @class
 */
class LoginScreen extends Component {
  /**
     * @constructor
     */
  constructor() {
    super();
    this.state = {};
  }

  /**
   * @return {*} LoginUI
   * @description it renders the login screen
   */
  render() {
    return (
      <View>
        <Text>Login here</Text>
        <TextInput
          placeholder="Enter your phone number"
        />
        <TextInput
          placeholder="Enter your password here"
        />
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginScreen;
