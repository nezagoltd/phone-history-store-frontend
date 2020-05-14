import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import welcome from '../../helpers/welcome.helper';
import styles from '../../styles/allStyles';
import checkNetworkConnectivity from '../../helpers/checkInternetConnection.helper';

const phoneHistoryStoryStoreLogo = require('../../../assets/img/phone-history-store-icon.png');
const myLoadingIcon = require('../../../assets/img/loading-icon.gif');

const { allStyles } = styles;

/**
 * @class
 * @classdesc It contains the Welcome screen UI
 */
class WelcomeScreen extends Component {
  /**
   * @param {*} props
   * @constructor
   * */
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {
    checkNetworkConnectivity(this);
  }

  /**
   * @method
   * @returns {*} WelcomeUI
   * */
  render() {
    const { isInternetReachable } = this.state;
    if (isInternetReachable) {
      welcome(this);
    }
    const { welcomeText } = this.state;
    const loadingIcon = (<Image style={allStyles.loadingIcon} source={myLoadingIcon} />);
    const { navigation } = this.props;
    return (
      <View style={allStyles.welcomeScreen}>

        <Image source={phoneHistoryStoryStoreLogo} />

        {welcomeText ? <Text style={allStyles.welcomeScreenText}>{welcomeText}</Text>
          : <View style={{ marginBottom: '10%' }}><Text>{loadingIcon}</Text></View>}

        <TouchableOpacity
          style={allStyles.getStartedBtn}
          onPress={() => { navigation.navigate('PhoneNumberScreen'); }}
        >
          <Text style={allStyles.welcomeScreenText}>Get Started</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

WelcomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default WelcomeScreen;
