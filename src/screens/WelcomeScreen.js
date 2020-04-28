import React from 'react';
import { View } from 'react-native';
import IconContainer from '../components/IconContainer';
import IntroductionTextContainer from '../components/IntroductionTextContainer';
import { WELCOME_TEXT } from '../../assets/text/eng/welcomeText';
import allStyles from '../styles/allStyles';

const icon = require('../../assets/img/phone-history-store-icon.png');

/**
 *
 * @returns {*} WelcomeScreen
 * @function
 * @description it takes navigation from props and it returns the
 * WelcomeScreen UI
 */
const WelcomeScreen = () => (
  <View style={allStyles.container}>
    <IconContainer
      iconSource={icon}
    />
    <IntroductionTextContainer textToShow={WELCOME_TEXT} />
  </View>
);

export default WelcomeScreen;
