import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from '../../styles/allStyles';
import handleLogin from '../../handlers/handleLogin';
import getUserData from '../../actions/getUserData';

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
      <View style={allStyles.signupFormContainer}>
        <ScrollView>

          <View style={{ marginBottom: 100 }}>
            <Text style={allStyles.signupTitle}>Login here</Text>
            <TextInput
              style={allStyles.signupInput}
              placeholder="Enter your phone number"
              placeholderTextColor="rgb(255,255,255)"
              onChangeText={(text) => this.setState({ phoneNumber: text })}
              keyboardType="phone-pad"
            />
            <TextInput
              style={allStyles.signupInput}
              placeholder="Enter your password here"
              placeholderTextColor="rgb(255,255,255)"
              onChangeText={(text) => this.setState({ password: text })}
            />
            <TouchableOpacity
              style={allStyles.nextBtn}
              onPress={() => this.handleLogin(this)}
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
  myData: PropTypes.object.isRequired,
  getUserData: PropTypes.func.isRequired,
};

/**
 *
 * @param {*} state
 * @returns {*} state
 */
const mapStateToProps = (state) => ({
  myData: state.myReducers,
});

export default connect(mapStateToProps, { getUserData })(LoginScreen);
