import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/allStyles';
import handleLogin from '../../handlers/handleLogin';
import myMystyles from '../../styles/login.scss'


const { allStyles } = styles;
/**
 * @class
 */
class LoginScreen extends Component {
  handleLogin=handleLogin;

  /**
     * @constructor
     */
  constructor() {
    super();
    this.state = {};
    this.handleLogin = this.handleLogin.bind(this);
  }

  /**
   * @return {*} LoginUI
   * @description it renders the login screen
   */
  render() {
    const { navigation } = this.props;
    return (
      <View style={myMystyles["login-screen"]}>
        <View style={myMystyles["login-signup"]}>
          <View style={myMystyles["login-form"]}>
            <Text style={allStyles.signupTitle}>Login here</Text>

            <TextInput
              style={myMystyles["text-input"]}
              placeholder="Enter your phone number"
              placeholderTextColor="rgb(255,255,255)"
              onChangeText={(text) => this.setState({ phoneNumber: text })}
              keyboardType="phone-pad"
            />

            <TextInput
              style={myMystyles["text-input"]}
              placeholder="Enter your password here"
              placeholderTextColor="rgb(255,255,255)"
              onChangeText={(text) => this.setState({ password: text })}
            />

            <TouchableOpacity
              style={myMystyles["btn-primary"]}
              onPress={() => this.handleLogin(this)}
            >
              <Text style={myMystyles["text-login"]}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 'auto' }}>
            <TouchableOpacity
              style={myMystyles["btn-primary"]}
              onPress={() => navigation.navigate('WelcomeScreen')}
            >
              <Text style={myMystyles["text-login"]}>Signup</Text>
            </TouchableOpacity>
          </View>
          </View>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LoginScreen;
