import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../../styles/allStyles';
import nextFunction from '../../helpers/next.helper';
import getUserData from '../../actions/getUserData';

const { allStyles } = styles;
/**
 * @class
 * @classdesc
 */
class DeviceInfoScreen extends Component {
    nextFunction=nextFunction;

    /**
 * @constructor
 */
    constructor() {
      super();
      this.state = {};
      this.nextFunction = this.nextFunction.bind(this);
    }

  componentDidMount=() => {
    this.setState({ deviceUniqueId: DeviceInfo.getUniqueId() });
  }

  /**
   * @method
   * @returns {*} UI
   */
  render() {
    return (
      <View style={allStyles.signupFormContainer}>
        <Text style={allStyles.signupTitle}>Name this device</Text>
        <View style={allStyles.signupCodeAndPhoneContainer}>
          <TextInput
            style={allStyles.signupInput}
            placeholder="Enter name, eg: descholar's phone"
            placeholderTextColor="rgb(255,255,255)"
            onChangeText={(text) => this.setState({ deviceName: text })}
            keyboardType="default"
            autoFocus
          />
        </View>
        <View>
          <TouchableOpacity
            style={allStyles.nextBtn}
            onPress={() => this.nextFunction(this, 'EnterPasswordScreen')}
          >
            <Text style={allStyles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

DeviceInfoScreen.propTypes = {
  myData: PropTypes.object.isRequired,
  getUserData: PropTypes.func.isRequired,
};

/**
 *
 * @param {*} state
 * @returns {*} mapStateToProps
 */
const mapStateToProps = (state) => ({
  myData: state.myReducers,
});

export default connect(mapStateToProps, { getUserData })(DeviceInfoScreen);
