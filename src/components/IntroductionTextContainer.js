import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import allStyles from '../styles/allStyles';

/**
 *
 * @param {*} textToShow
 * @returns {*} UI
 */
const IntroductionTextContainer = ({ textToShow }) => {
  IntroductionTextContainer.propTypes = {
    textToShow: PropTypes.string.isRequired,
  };

  return (
    <View style={allStyles.welcomeContent}>
      <Text style={allStyles.welcomeText}>{textToShow}</Text>
    </View>
  );
};

export default IntroductionTextContainer;
