import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/allStyles';


const { allStyles } = styles;
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
    const { navigation } = this.props;
    return (
      <View style={allStyles.signupFormContainer}>
        <ScrollView>

          <View style={{ marginBottom: 100 }}>
            <Text style={allStyles.signupTitle}>Login here</Text>
            <TextInput
              style={allStyles.signupInput}
              placeholder="Enter your phone number"
              placeholderTextColor="rgb(255,255,255)"
            />
            <TextInput
              style={allStyles.signupInput}
              placeholder="Enter your password here"
              placeholderTextColor="rgb(255,255,255)"
            />
            <TouchableOpacity
              style={allStyles.nextBtn}
            >
              <Text style={allStyles.nextText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 'auto' }}>
            <Text style={allStyles.nextText}>If you do not have an account</Text>
            <TouchableOpacity
              style={allStyles.nextBtn}
              onPress={() => navigation.navigate('WelcomeScreen')}
            >
              <Text style={allStyles.nextText}>Get started here</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default LoginScreen;
